const { expect } = require('chai');
const { ethers } = require('hardhat');
const { time } = require('@nomicfoundation/hardhat-network-helpers');

describe('TrustLink', function () {
  let TrustLink, trustLink, MockERC20, mockToken;
  let owner, client, freelancer, otherAccount;
  let platformFee = 250; // 2.5%

  beforeEach(async function () {
    [owner, client, freelancer, otherAccount] = await ethers.getSigners();

    // Deploy mock token
    MockERC20 = await ethers.getContractFactory('MockERC20');
    mockToken = await MockERC20.deploy('Mock USDC', 'USDC', 6);
    await mockToken.deployed();

    // Deploy TrustLink
    TrustLink = await ethers.getContractFactory('TrustLink');
    trustLink = await TrustLink.deploy(mockToken.address, platformFee);
    await trustLink.deployed();

    // Mint tokens to client
    await mockToken.mint(client.address, ethers.utils.parseUnits('10000', 6));
    await mockToken.connect(client).approve(trustLink.address, ethers.constants.MaxUint256);
  });

  describe('Deployment', function () {
    it('Should set the correct payment token', async function () {
      expect(await trustLink.paymentToken()).to.equal(mockToken.address);
    });

    it('Should set the correct platform fee', async function () {
      expect(await trustLink.platformFee()).to.equal(platformFee);
    });

    it('Should set the correct owner', async function () {
      expect(await trustLink.owner()).to.equal(owner.address);
    });
  });

  describe('Job Creation', function () {
    const jobTitle = 'Web Development Project';
    const jobDescription = 'Create a website using React';
    const budget = ethers.utils.parseUnits('1000', 6); // 1000 USDC
    const isFixed = true;
    let deadline;

    beforeEach(async function () {
      deadline = (await time.latest()) + time.duration.days(30);
    });

    it('Should create a job successfully', async function () {
      await expect(trustLink.connect(client).createJob(
        jobTitle,
        jobDescription,
        budget,
        isFixed,
        deadline
      ))
        .to.emit(trustLink, 'JobCreated')
        .withArgs(0, client.address, jobTitle, budget);

      const job = await trustLink.jobs(0);
      expect(job.client).to.equal(client.address);
      expect(job.title).to.equal(jobTitle);
      expect(job.budget).to.equal(budget);
    });

    it('Should transfer correct amount to escrow', async function () {
      const escrowAmount = budget.add(budget.mul(platformFee).div(10000));
      
      await expect(() => trustLink.connect(client).createJob(
        jobTitle,
        jobDescription,
        budget,
        isFixed,
        deadline
      )).to.changeTokenBalances(
        mockToken,
        [client.address, trustLink.address],
        [escrowAmount.mul(-1), escrowAmount]
      );
    });
  });

  describe('Proposal Submission', function () {
    const jobId = 0;
    const proposalDescription = 'I can build this website';
    const bid = ethers.utils.parseUnits('900', 6); // 900 USDC

    beforeEach(async function () {
      const deadline = (await time.latest()) + time.duration.days(30);
      await trustLink.connect(client).createJob(
        'Web Development Project',
        'Create a website using React',
        ethers.utils.parseUnits('1000', 6),
        true,
        deadline
      );
    });

    it('Should submit proposal successfully', async function () {
      await expect(trustLink.connect(freelancer).submitProposal(
        jobId,
        bid,
        proposalDescription
      ))
        .to.emit(trustLink, 'ProposalSubmitted')
        .withArgs(jobId, 0, freelancer.address);

      const proposals = await trustLink.getJobProposals(jobId);
      expect(proposals[0].freelancer).to.equal(freelancer.address);
      expect(proposals[0].bid).to.equal(bid);
    });
  });

  describe('Proposal Acceptance', function () {
    beforeEach(async function () {
      const deadline = (await time.latest()) + time.duration.days(30);
      await trustLink.connect(client).createJob(
        'Web Development Project',
        'Create a website using React',
        ethers.utils.parseUnits('1000', 6),
        true,
        deadline
      );

      await trustLink.connect(freelancer).submitProposal(
        0,
        ethers.utils.parseUnits('900', 6),
        'I can build this website'
      );
    });

    it('Should accept proposal successfully', async function () {
      await expect(trustLink.connect(client).acceptProposal(0, 0))
        .to.emit(trustLink, 'ProposalAccepted')
        .withArgs(0, 0, freelancer.address);

      const job = await trustLink.jobs(0);
      expect(job.freelancer).to.equal(freelancer.address);
      expect(job.status).to.equal(1); // InProgress
    });
  });

  describe('Job Completion', function () {
    const jobId = 0;
    const proposalId = 0;
    const bid = ethers.utils.parseUnits('900', 6);

    beforeEach(async function () {
      const deadline = (await time.latest()) + time.duration.days(30);
      
      await trustLink.connect(client).createJob(
        'Web Development Project',
        'Create a website using React',
        ethers.utils.parseUnits('1000', 6),
        true,
        deadline
      );

      await trustLink.connect(freelancer).submitProposal(jobId, bid, 'I can build this website');
      await trustLink.connect(client).acceptProposal(jobId, proposalId);
    });

    it('Should complete job and transfer payments correctly', async function () {
      const fee = bid.mul(platformFee).div(10000);

      await expect(() => trustLink.connect(client).completeJob(jobId))
        .to.changeTokenBalances(
          mockToken,
          [trustLink.address, freelancer.address, owner.address],
          [bid.add(fee).mul(-1), bid, fee]
        );

      const job = await trustLink.jobs(jobId);
      expect(job.status).to.equal(2); // Completed
    });
  });

  describe('Admin Functions', function () {
    it('Should update platform fee', async function () {
      const newFee = 300; // 3%
      await trustLink.connect(owner).updatePlatformFee(newFee);
      expect(await trustLink.platformFee()).to.equal(newFee);
    });

    it('Should verify user', async function () {
      await trustLink.connect(owner).verifyUser(freelancer.address);
      const profile = await trustLink.userProfiles(freelancer.address);
      expect(profile.isVerified).to.be.true;
    });
  });
});