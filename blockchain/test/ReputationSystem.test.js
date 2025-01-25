const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReputationSystem", function () {
  let Reputation, reputation, user;

  beforeEach(async function () {
    [_, user] = await ethers.getSigners();
    Reputation = await ethers.getContractFactory("ReputationSystem");
    reputation = await Reputation.deploy();
    await reputation.deployed();
  });

  it("should increase user reputation", async function () {
    await reputation.increaseReputation(user.address, 10);
    const score = await reputation.getReputation(user.address);
    expect(score).to.equal(10);
  });

  it("should award a badge to a user", async function () {
    await reputation.awardBadge(user.address, "Top Collaborator");
    const badges = await reputation.getBadges(user.address);
    expect(badges[0]).to.equal("Top Collaborator");
  });
});
