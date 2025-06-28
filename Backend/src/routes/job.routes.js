const express = require('express');
const jobController = require('../controllers/job.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

// Job routes
router.post('/', authMiddleware, jobController.createJob);
router.get('/', jobController.getJobs);
router.get('/:jobId', jobController.getJob);
router.post('/:jobId/proposals', authMiddleware, jobController.submitProposal);
router.post('/:jobId/proposals/:proposalId/accept', authMiddleware, jobController.acceptProposal);

module.exports = router;