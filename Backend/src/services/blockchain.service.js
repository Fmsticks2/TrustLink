const { ethers } = require('ethers');
const TrustLinkABI = require('../contracts/TrustLink.json');

class BlockchainService {
  constructor() {
    try {
      console.log('Initializing BlockchainService...');
      console.log(`RPC URL: ${process.env.CITREA_RPC_URL}`);
      console.log(`Contract Address: ${process.env.TRUSTLINK_CONTRACT_ADDRESS}`);
      
      // Check if required environment variables are set
      if (!process.env.CITREA_RPC_URL) {
        throw new Error('CITREA_RPC_URL is not defined in environment variables');
      }
      if (!process.env.OPERATOR_PRIVATE_KEY) {
        throw new Error('OPERATOR_PRIVATE_KEY is not defined in environment variables');
      }
      if (!process.env.TRUSTLINK_CONTRACT_ADDRESS) {
        throw new Error('TRUSTLINK_CONTRACT_ADDRESS is not defined in environment variables');
      }
      
      this.provider = new ethers.JsonRpcProvider(process.env.CITREA_RPC_URL);
      this.wallet = new ethers.Wallet(process.env.OPERATOR_PRIVATE_KEY, this.provider);
      this.contract = new ethers.Contract(
        process.env.TRUSTLINK_CONTRACT_ADDRESS,
        TrustLinkABI.abi,
        this.provider
      );
      
      console.log('BlockchainService initialized successfully');
    } catch (error) {
      console.error('Failed to initialize BlockchainService:', error);
      // Don't throw error here, allow the service to be created even if initialization fails
      // This prevents the server from crashing on startup
      this.initializationError = error;
    }
  }

  async createJob(clientAddress, title, description, budget, isFixed, deadline) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot create job: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const tx = await this.contract.connect(this.wallet).createJob(
        title,
        description,
        ethers.parseEther(budget.toString()),
        isFixed,
        deadline
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash,
        jobId: this._getJobIdFromLogs(receipt.logs)
      };
    } catch (error) {
      console.error(`Blockchain error in createJob:`, error);
      return {
        error: true,
        message: `Failed to create job: ${error.message}`
      };
    }
  }

  async submitProposal(freelancerAddress, jobId, bid, description) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot submit proposal: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const tx = await this.contract.connect(this.wallet).submitProposal(
        jobId,
        ethers.parseEther(bid.toString()),
        description
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash,
        proposalId: this._getProposalIdFromLogs(receipt.logs)
      };
    } catch (error) {
      console.error(`Blockchain error in submitProposal:`, error);
      return {
        error: true,
        message: `Failed to submit proposal: ${error.message}`
      };
    }
  }

  async acceptProposal(clientAddress, jobId, proposalId) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot accept proposal: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const tx = await this.contract.connect(this.wallet).acceptProposal(
        jobId,
        proposalId
      );
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash
      };
    } catch (error) {
      console.error(`Blockchain error in acceptProposal:`, error);
      return {
        error: true,
        message: `Failed to accept proposal: ${error.message}`
      };
    }
  }

  async completeJob(clientAddress, jobId) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot complete job: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const tx = await this.contract.connect(this.wallet).completeJob(jobId);
      const receipt = await tx.wait();
      return {
        transactionHash: receipt.transactionHash
      };
    } catch (error) {
      console.error(`Blockchain error in completeJob:`, error);
      return {
        error: true,
        message: `Failed to complete job: ${error.message}`
      };
    }
  }

  async getJob(jobId) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot get job: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const job = await this.contract.getJob(jobId);
      return this._formatJob(job);
    } catch (error) {
      console.error(`Blockchain error in getJob:`, error);
      return {
        error: true,
        message: `Failed to get job: ${error.message}`
      };
    }
  }

  async getJobProposals(jobId) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot get job proposals: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const proposals = await this.contract.getJobProposals(jobId);
      return proposals.map(this._formatProposal);
    } catch (error) {
      console.error(`Blockchain error in getJobProposals:`, error);
      return {
        error: true,
        message: `Failed to get job proposals: ${error.message}`
      };
    }
  }

  async getUserProfile(address) {
    try {
      // Check if blockchain service was initialized properly
      if (this.initializationError) {
        console.error('Cannot get user profile: BlockchainService not initialized properly');
        return {
          error: true,
          message: 'Blockchain service unavailable',
          details: this.initializationError.message
        };
      }

      const profile = await this.contract.getUserProfile(address);
      return this._formatUserProfile(profile);
    } catch (error) {
      console.error(`Blockchain error in getUserProfile:`, error);
      return {
        error: true,
        message: `Failed to get user profile: ${error.message}`
      };
    }
  }

  // Helper methods for formatting blockchain data
  _formatJob(job) {
    return {
      id: job.id.toString(),
      client: job.client,
      title: job.title,
      description: job.description,
      budget: ethers.formatEther(job.budget),
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
      bid: ethers.formatEther(proposal.bid),
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