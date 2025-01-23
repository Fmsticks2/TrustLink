const express = require('express');
const router = express.Router();
const disputeController = require('../controllers/disputeController');

router.post('/create', disputeController.createDispute);
router.get('/:id', disputeController.getDispute);
router.post('/:id/resolve', disputeController.resolveDispute);

module.exports = router;