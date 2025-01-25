const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TrustLinkEscrow", function () {
  let Escrow, escrow, owner, collaborator1, collaborator2;

  beforeEach(async function () {
    [owner, collaborator1, collaborator2] = await ethers.getSigners();
    Escrow = await ethers.getContractFactory("TrustLinkEscrow");
    escrow = await Escrow.deploy();
    await escrow.deployed();
  });

  it("should create a project with milestones", async function () {
    const amounts = [ethers.utils.parseEther("1"), ethers.utils.parseEther("2")];
    await escrow.createProject([collaborator1.address, collaborator2.address], amounts, {
      value: ethers.utils.parseEther("3"),
    });

    const project = await escrow.projects(1);
    expect(project.owner).to.equal(owner.address);
    expect(project.totalFunds).to.equal(ethers.utils.parseEther("3"));
  });

  it("should allow a collaborator to submit a milestone", async function () {
    const amounts = [ethers.utils.parseEther("1")];
    await escrow.createProject([collaborator1.address], amounts, {
      value: ethers.utils.parseEther("1"),
    });

    await escrow.connect(collaborator1).submitMilestone(1, 0);
    const milestone = await escrow.getMilestone(1, 0);
    expect(milestone.isCompleted).to.equal(true);
  });

  it("should allow the owner to approve a milestone and release funds", async function () {
    const amounts = [ethers.utils.parseEther("1")];
    await escrow.createProject([collaborator1.address], amounts, {
      value: ethers.utils.parseEther("1"),
    });

    await escrow.connect(collaborator1).submitMilestone(1, 0);
    await escrow.approveMilestone(1, 0);

    const balance = await ethers.provider.getBalance(collaborator1.address);
    expect(balance).to.be.above(ethers.utils.parseEther("1"));
  });
});