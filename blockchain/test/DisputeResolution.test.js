const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DisputeResolution", function () {
  let Dispute, dispute, owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    Dispute = await ethers.getContractFactory("DisputeResolution");
    dispute = await Dispute.deploy();
    await dispute.deployed();
  });

  it("should allow a user to raise a dispute", async function () {
    await dispute.raiseDispute(1, 0, "Milestone not completed");
    const disputeDetails = await dispute.getDispute(1);

    expect(disputeDetails.projectId).to.equal(1);
    expect(disputeDetails.raisedBy).to.equal(owner.address);
    expect(disputeDetails.reason).to.equal("Milestone not completed");
  });

  it("should allow a resolver to resolve a dispute", async function () {
    await dispute.raiseDispute(1, 0, "Milestone not completed");
    await dispute.resolveDispute(1, "Collaborator to retry milestone");

    const disputeDetails = await dispute.getDispute(1);
    expect(disputeDetails.isResolved).to.equal(true);
  });
});