const Job = require('../models/job.model');
const User = require('../models/user.model');
const blockchainService = require('../services/blockchain.service');
const { validationResult } = require('express-validator');

class JobController {
  async createJob(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        title,
        description,
        category,
        requiredSkills,
        budget,
        timeline,
        requirements
      } = req.body;

      // Create job on blockchain
      const blockchainResponse = await blockchainService.createJob(
        req.user.address,
        title,
        description,
        budget.amount,
        budget.isFixed,
        new Date(timeline.deadline).getTime() / 1000
      );

      // Create job in database
      const job = new Job({
        blockchainJobId: blockchainResponse.jobId,
        client: req.user.address,
        title,
        description,
        category,
        requiredSkills,
        budget,
        timeline,
        requirements
      });

      job.addActivity('StatusChange', 'Job created', req.user.address);
      await job.save();

      res.status(201).json({
        message: 'Job created successfully',
        job,
        transactionHash: blockchainResponse.transactionHash
      });
    } catch (error) {
      console.error('Create job error:', error);
      res.status(500).json({
        message: 'Failed to create job',
        error: error.message
      });
    }
  }

  async getJobs(req, res) {
    try {
      const {
        category,
        skills,
        status,
        minBudget,
        maxBudget,
        page = 1,
        limit = 10
      } = req.query;

      const query = {};

      if (category) query.category = category;
      if (status) query.status = status;
      if (skills) query.requiredSkills = { $in: skills.split(',') };
      if (minBudget || maxBudget) {
        query['budget.amount'] = {};
        if (minBudget) query['budget.amount'].$gte = Number(minBudget);
        if (maxBudget) query['budget.amount'].$lte = Number(maxBudget);
      }

      const skip = (page - 1) * limit;

      const jobs = await Job.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .populate('client', 'profile.name profile.title verification.isIdentityVerified');

      const total = await Job.countDocuments(query);

      res.json({
        jobs,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        total
      });
    } catch (error) {
      console.error('Get jobs error:', error);
      res.status(500).json({
        message: 'Failed to fetch jobs',
        error: error.message
      });
    }
  }

  async getJob(req, res) {
    try {
      const { jobId } = req.params;

      const job = await Job.findOne({ blockchainJobId: jobId })
        .populate('client', 'profile.name profile.title verification')
        .populate('proposals.freelancer', 'profile.name profile.title stats verification');

      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }

      // Increment view count
      job.metrics.views += 1;
      await job.save();

      // Get blockchain job data
      const blockchainJob = await blockchainService.getJob(jobId);

      res.json({
        ...job.toObject(),
        blockchainData: blockchainJob
      });
    } catch (error) {
      console.error('Get job error:', error);
      res.status(500).json({
        message: 'Failed to fetch job details',
        error: error.message
      });
    }
  }

  async submitProposal(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { jobId } = req.params;
      const { coverLetter, bid, estimatedDuration } = req.body;

      const job = await Job.findOne({ blockchainJobId: jobId });
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }

      if (job.status !== 'Open') {
        return res.status(400).json({ message: 'Job is not open for proposals' });
      }

      // Submit proposal to blockchain
      const blockchainResponse = await blockchainService.submitProposal(
        req.user.address,
        jobId,
        bid.amount,
        coverLetter
      );

      // Add proposal to job
      job.proposals.push({
        blockchainProposalId: blockchainResponse.proposalId,
        freelancer: req.user.address,
        coverLetter,
        bid,
        estimatedDuration
      });

      job.addActivity('ProposalReceived', 'New proposal submitted', req.user.address);
      await job.updateMetrics();
      await job.save();

      res.status(201).json({
        message: 'Proposal submitted successfully',
        proposalId: blockchainResponse.proposalId,
        transactionHash: blockchainResponse.transactionHash
      });
    } catch (error) {
      console.error('Submit proposal error:', error);
      res.status(500).json({
        message: 'Failed to submit proposal',
        error: error.message
      });
    }
  }

  async acceptProposal(req, res) {
    try {
      const { jobId, proposalId } = req.params;

      const job = await Job.findOne({ blockchainJobId: jobId });
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }

      if (job.client !== req.user.address) {
        return res.status(403).json({ message: 'Not authorized' });
      }

      const proposal = job.proposals.find(p => p.blockchainProposalId === proposalId);
      if (!proposal) {
        return res.status(404).json({ message: 'Proposal not found' });
      }

      // Accept proposal on blockchain
      const blockchainResponse = await blockchainService.acceptProposal(
        req.user.address,
        jobId,
        proposalId
      );

      // Update job and proposal status
      proposal.status = 'Accepted';
      job.status = 'InProgress';
      job.selectedProposal = proposal._id;
      job.addActivity('StatusChange', 'Proposal accepted and job started', req.user.address);

      await job.save();

      res.json({
        message: 'Proposal accepted successfully',
        transactionHash: blockchainResponse.transactionHash
      });
    } catch (error) {
      console.error('Accept proposal error:', error);
      res.status(500).json({
        message: 'Failed to accept proposal',
        error: error.message
      });
    }
  }
}

module.exports = new JobController();