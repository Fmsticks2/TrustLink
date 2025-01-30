// test/TrustLinkEscrow.test.js
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('TrustLinkEscrow', function () {
  let trustLinkEscrow;
  let owner;
  let collaborator;
  let funds;

  beforeEach(async function () {
    [owner, collaborator] = await ethers.getSigners();
    const TrustLinkEscrow = await ethers.getContractFactory('TrustLinkEscrow');
    trustLinkEscrow = await TrustLinkEscrow.deploy();
    funds = ethers.utils.parseEther('10.0');
  });

  it('should create a project with milestones', async function () {
    await trustLinkEscrow.createProject([funds], { value: funds });
    expect(await trustLinkEscrow.getProjectCount()).to.equal(1);
  });

  it('should allow a collaborator to submit a milestone', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    expect(await trustLinkEscrow.getMilestoneCount(0)).to.equal(1);
  });

  it('should allow the owner to approve a milestone and release funds', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.approveMilestone(0, 0);
    expect(await trustLinkEscrow.getReleasedFunds(0)).to.equal(funds);
  });

  it('should not allow a collaborator to approve a milestone', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await expect(trustLinkEscrow.connect(collaborator).approveMilestone(0, 0)).to.be.revertedWith('Only the owner can approve milestones');
  });

  it('should not allow the owner to approve a milestone that has not been submitted', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await expect(trustLinkEscrow.approveMilestone(0, 0)).to.be.revertedWith('Milestone has not been submitted');
  });

  it('should not allow the owner to approve a milestone that has already been approved', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.approveMilestone(0, 0);
    await expect(trustLinkEscrow.approveMilestone(0, 0)).to.be.revertedWith('Milestone has already been approved');
  });

  it('should create a project with milestones and allow multiple collaborators to submit milestones', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 2');
    expect(await trustLinkEscrow.getMilestoneCount(0)).to.equal(2);
  });

  it('should create a project with milestones and allow the owner to approve multiple milestones', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 2');
    await trustLinkEscrow.approveMilestone(0, 0);
    await trustLinkEscrow.approveMilestone(0, 1);
    expect(await trustLinkEscrow.getReleasedFunds(0)).to.equal(funds.mul( 2)); // Assuming each milestone releases the full funds

  });

  it('should not allow the owner to approve a milestone after the project is completed', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.approveMilestone(0, 0);
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 2');
    await trustLinkEscrow.approveMilestone(0, 1);
    await expect(trustLinkEscrow.approveMilestone(0, 2)).to.be.revertedWith('No more milestones to approve');
  });

  it('should allow the owner to withdraw remaining funds after project completion', async function () {
    await trustLinkEscrow.createProject(funds, { value: funds });
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 1');
    await trustLinkEscrow.approveMilestone(0, 0);
    await trustLinkEscrow.connect(collaborator).submitMilestone(0, 'Milestone 2');
    await trustLinkEscrow.approveMilestone(0, 1);
    const initialBalance = await ethers.provider.getBalance(owner.address);
    await trustLinkEscrow.withdrawRemainingFunds(0);
    const finalBalance = await ethers.provider.getBalance(owner.address);
    expect(finalBalance).to.be.gt(initialBalance);
  });
});