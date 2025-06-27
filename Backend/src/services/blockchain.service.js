const { ethers } = require('ethers');
const { CitreaSDK } = require('@citrea/sdk');
const TrustLinkABI = require('../contracts/TrustLink.json');

class BlockchainService {
  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.CITREA_RPC_URL);
    this.citreaSDK = new CitreaSDK({
      rpcUrl: process.env.CITREA_RPC_URL,
      privateKey: process.env.OPERATOR_PRIVATE_KEY
    });
    this.contract = new ethers.Contract(
      process.env.TRUSTLINK_CONTRACT_ADDRESS,
      TrustLinkABI,
      this.provider
    );
  }

  async createJob(clientAddress, title, description, budget, isFixed, deadline) {
    try {
      const tx = await this.contract.connect(this.citreaSDK.getSigner()).createJob(
        title,
        description,
        ethers.utils.parseEther(budget.toString()),
        isFixed,
        deadline
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash,
        jobId: this._getJobIdFromLogs(receipt.logs)
      };
    } catch (error) {
      throw new Error(`Failed to create job: ${error.message}`);
    }
  }

  async submitProposal(freelancerAddress, jobId, bid, description) {
    try {
      const tx = await this.contract.connect(this.citreaSDK.getSigner()).submitProposal(
        jobId,
        ethers.utils.parseEther(bid.toString()),
        description
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash,
        proposalId: this._getProposalIdFromLogs(receipt.logs)
      };
    } catch (error) {
      throw new Error(`Failed to submit proposal: ${error.message}`);
    }
  }

  async acceptProposal(clientAddress, jobId, proposalId) {
    try {
      const tx = await this.contract.connect(this.citreaSDK.getSigner()).acceptProposal(
        jobId,
        proposalId
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash
      };
    } catch (error) {
      throw new Error(`Failed to accept proposal: ${error.message}`);
    }
  }

  async completeJob(clientAddress, jobId) {
    try {
      const tx = await this.contract.connect(this.citreaSDK.getSigner()).completeJob(jobId);
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash
      };
    } catch (error) {
      throw new Error(`Failed to complete job: ${error.message}`);
    }
  }

  async getJob(jobId) {
    try {
      const job = await this.contract.getJob(jobId);
      return this._formatJob(job);
    } catch (error) {
      throw new Error(`Failed to get job: ${error.message}`);
    }
  }

  async getJobProposals(jobId) {
    try {
      const proposals = await this.contract.getJobProposals(jobId);
      return proposals.map(this._formatProposal);
    } catch (error) {
      throw new Error(`Failed to get job proposals: ${error.message}`);
    }
  }

  async getUserProfile(address) {
    try {
      const profile = await this.contract.getUserProfile(address);
      return this._formatUserProfile(profile);
    } catch (error) {
      throw new Error(`Failed to get user profile: ${error.message}`);
    }
  }

  // Helper methods for formatting blockchain data
  _formatJob(job) {
    return {
      id: job.id.toString(),
      client: job.client,
      title: job.title,
      description: job.description,
      budget: ethers.utils.formatEther(job.budget),
      isFixed: job.isFixed,
      isActive: job.isActive,
      freelancer: job.freelancer,
      deadline: new Date(job.deadline.toNumber() * 1000),
      status: ['Open', 'InProgress', 'Completed', 'Cancelled'][job.status]
    };
  }

  _formatProposal(proposal) {
    return {
      id: proposal.id.toString(),
      jobId: proposal.jobId.toString(),
      freelancer: proposal.freelancer,
      bid: ethers.utils.formatEther(proposal.bid),
      description: proposal.description,
      accepted: proposal.accepted
    };
  }

  _formatUserProfile(profile) {
    return {
      name: profile.name,
      skills: profile.skills,
      rating: profile.rating.toNumber(),
      totalRatings: profile.totalRatings.toNumber(),
      isVerified: profile.isVerified,
      userType: ['Client', 'Freelancer'][profile.userType]
    };
  }

  // Helper methods for parsing event logs
  _getJobIdFromLogs(logs) {
    const jobCreatedLog = logs.find(log => log.eventName === 'JobCreated');
    return jobCreatedLog ? jobCreatedLog.args.jobId.toString() : null;
  }

  _getProposalIdFromLogs(logs) {
    const proposalSubmittedLog = logs.find(log => log.eventName === 'ProposalSubmitted');
    return proposalSubmittedLog ? proposalSubmittedLog.args.proposalId.toString() : null;
  }
}

module.exports = new BlockchainService();