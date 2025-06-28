const express = require('express');
const authController = require('../controllers/auth.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = express.Router();

// Authentication routes
router.get('/nonce/:address', authController.getNonce);
router.post('/verify', authController.verifySignature);
router.post('/social', authController.socialAuth);
router.post('/link-wallet', authMiddleware, authController.linkWallet);

module.exports = router;