const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DisputeResolution", function () {
  let DisputeResolution, dispute, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const DisputeResolutionFactory = await ethers.getContractFactory("DisputeResolution");
    dispute = await DisputeResolutionFactory.deploy();
    await dispute.deployed();
  });

  it("should allow a user to raise a dispute", async function () {
    await expect(dispute.connect(addr1).raiseDispute(1, 1, "Work not delivered"))
      .to.emit(dispute, "DisputeRaised")
      .withArgs(1, 1, 1, addr1.address);
  });

  it("should allow a resolver to resolve a dispute", async function () {
    await dispute.connect(addr1).raiseDispute(1, 1, "Work not delivered");
    await expect(dispute.resolveDispute(1, "Resolved by refund"))
      .to.emit(dispute, "DisputeResolved")
      .withArgs(1, owner.address, "Resolved by refund");
  });
});

describe("TrustLinkEscrow", function () {
  let TrustLinkEscrow, escrow, owner, collaborator1, collaborator2;

  beforeEach(async function () {
    [owner, collaborator1, collaborator2] = await ethers.getSigners();
    const TrustLinkEscrowFactory = await ethers.getContractFactory("TrustLinkEscrow");
    escrow = await TrustLinkEscrowFactory.deploy();
    await escrow.deployed();
  });

  it("should create a project with milestones", async function () {
    const amounts = [1000, 2000];
    const collaborators = [collaborator1.address, collaborator2.address];

    // Create a project
    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    // Fetch the project details
    const project = await escrow.getProject(1);

    expect(project.owner).to.equal(owner.address);
    expect(project.totalFunds).to.equal(ethers.utils.parseEther("3"));
    expect(project.collaborators).to.deep.equal(collaborators);
  });

  it("should allow a collaborator to submit a milestone", async function () {
    const amounts = [1000, 2000];
    const collaborators = [collaborator1.address, collaborator2.address];

    // Create a project
    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    // Collaborator submits a milestone
    await expect(escrow.connect(collaborator1).submitMilestone(1, 0))
      .to.emit(escrow, "MilestoneSubmitted")
      .withArgs(1, 0);
  });

  it("should allow the owner to approve a milestone and release funds", async function () {
    const amounts = [1000, 2000];
    const collaborators = [collaborator1.address, collaborator2.address];

    // Create a project
    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    // Collaborator submits a milestone
    await escrow.connect(collaborator1).submitMilestone(1, 0);

    // Owner approves the milestone
    await expect(escrow.approveMilestone(1, 0))
      .to.emit(escrow, "MilestoneApproved")
      .withArgs(1, 0);

    // Funds released
    await expect(escrow.approveMilestone(1, 0))
      .to.emit(escrow, "FundsReleased")
      .withArgs(1, 0, collaborator1.address);
  });
});

describe("Lock", function () {
  let Lock, lock, unlockTime, owner, otherAccount;

  beforeEach(async function () {
    unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 60;
    const LockFactory = await ethers.getContractFactory("Lock");
    lock = await LockFactory.deploy(unlockTime);
    await lock.deployed();
    [owner, otherAccount] = await ethers.getSigners();
  });

  it("Should set the right unlock time", async function () {
    expect(await lock.unlockTime()).to.equal(unlockTime);
  });

  it("Should allow withdrawal only after unlock time", async function () {
    await ethers.provider.send("evm_increaseTime", [60]);
    await ethers.provider.send("evm_mine", []);
    await expect(lock.withdraw()).to.not.be.reverted;
  });

  it("Should revert if someone other than the owner tries to withdraw", async function () {
    await ethers.provider.send("evm_increaseTime", [60]);
    await ethers.provider.send("evm_mine", []);
    await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith("You aren't the owner");
  });
});
