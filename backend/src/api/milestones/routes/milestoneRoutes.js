const express = require('express');
const router = express.Router();
const milestoneController = require('../controllers/milestoneController');

router.post('/create', milestoneController.createMilestone);
router.get('/:id', milestoneController.getMilestone);
router.post('/:id/complete', milestoneController.completeMilestone);

module.exports = router;