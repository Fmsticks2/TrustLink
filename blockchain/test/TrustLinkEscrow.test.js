
// test/TrustLinkEscrow.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TrustLinkEscrow", function () {
  let escrow, owner, collaborator1, collaborator2;

  beforeEach(async function () {
    [owner, collaborator1, collaborator2] = await ethers.getSigners();
    const TrustLinkEscrowFactory = await ethers.getContractFactory("TrustLinkEscrow");
    escrow = await TrustLinkEscrowFactory.deploy();
    await escrow.deployed();
  });

  it("should create a project with milestones", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    const collaborators = [collaborator1.address, collaborator2.address];

    await expect(
      escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") })
    )
      .to.emit(escrow, "ProjectCreated");

    const project = await escrow.projects(1);
    expect(project.owner).to.equal(owner.address);
    expect(project.totalFunds).to.equal(ethers.utils.parseEther("3"));
  });

  it("should allow a collaborator to submit a milestone", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    const collaborators = [collaborator1.address, collaborator2.address];

    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    await expect(escrow.connect(collaborator1).submitMilestone(1, 0))
      .to.emit(escrow, "MilestoneSubmitted")
      .withArgs(1, 0, collaborator1.address);
  });

  it("should allow the owner to approve a milestone and release funds", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    const collaborators = [collaborator1.address, collaborator2.address];

    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    await escrow.connect(collaborator1).submitMilestone(1, 0);

    await expect(escrow.approveMilestone(1, 0))
      .to.emit(escrow, "MilestoneApproved")
      .withArgs(1, 0, collaborator1.address);

    await expect(escrow.approveMilestone(1, 0))
      .to.emit(escrow, "FundsReleased")
      .withArgs(1, 0, collaborator1.address);
  });

  it("should not allow a collaborator to approve a milestone", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    const collaborators = [collaborator1.address, collaborator2.address];

    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    await escrow.connect(collaborator1).submitMilestone(1, 0);

    await expect(escrow.connect(collaborator1).approveMilestone(1, 0)).to.be.revertedWith("Not project owner");
  });

  it("should not allow the owner to approve a milestone that has not been submitted", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    const collaborators = [collaborator1.address, collaborator2.address];

    await escrow.createProject(collaborators, amounts, { value: ethers.utils.parseEther("3") });

    await expect(escrow.approveMilestone(1, 0)).to.be.revertedWith("Milestone not submitted");
  });
});