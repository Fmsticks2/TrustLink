const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { ethers } = require('ethers');
const crypto = require('crypto');

class AuthController {
  async getNonce(req, res) {
    try {
      const { address } = req.params;

      if (!ethers.isAddress(address)) {
        return res.status(400).json({ message: 'Invalid Ethereum address' });
      }

      // Generate a random nonce
      const nonce = crypto.randomBytes(32).toString('hex');

      // Find or create user
      let user = await User.findOne({ address: address.toLowerCase() });
      if (!user) {
        user = new User({
          address: address.toLowerCase(),
          nonce
        });
      } else {
        user.nonce = nonce;
      }

      await user.save();

      res.json({
        nonce: `Welcome to TrustLink!\n\nPlease sign this message to verify your identity.\n\nNonce: ${nonce}`,
        address: user.address
      });
    } catch (error) {
      console.error('Get nonce error:', error);
      res.status(500).json({
        message: 'Failed to generate nonce',
        error: error.message
      });
    }
  }

  async verifySignature(req, res) {
    try {
      const { address, signature } = req.body;

      if (!ethers.isAddress(address)) {
        return res.status(400).json({ message: 'Invalid Ethereum address' });
      }

      const user = await User.findOne({ address: address.toLowerCase() });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Construct the message that was signed
      const message = `Welcome to TrustLink!\n\nPlease sign this message to verify your identity.\n\nNonce: ${user.nonce}`;

      // Recover the address from the signature
      const recoveredAddress = ethers.verifyMessage(message, signature);

      if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
        return res.status(401).json({ message: 'Invalid signature' });
      }

      // Generate a new nonce for next time
      user.nonce = crypto.randomBytes(32).toString('hex');
      await user.save();

      // Generate JWT token
      const token = jwt.sign(
        {
          address: user.address,
          id: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        message: 'Authentication successful',
        token,
        user: user.toPublicProfile()
      });
    } catch (error) {
      console.error('Verify signature error:', error);
      res.status(500).json({
        message: 'Authentication failed',
        error: error.message
      });
    }
  }

  async socialAuth(req, res) {
    try {
      const { provider, token, email } = req.body;

      // Verify token with social provider
      const socialProfile = await this.verifySocialToken(provider, token);

      // Find or create user
      let user = await User.findOne({ email });
      if (!user) {
        user = new User({
          email,
          nonce: crypto.randomBytes(32).toString('hex'),
          profile: {
            name: socialProfile.name
          },
          verification: {
            isEmailVerified: true
          }
        });
      }

      // Update user profile if needed
      if (!user.profile.name) {
        user.profile.name = socialProfile.name;
      }

      await user.save();

      // Generate JWT token
      const jwtToken = jwt.sign(
        {
          email: user.email,
          id: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        message: 'Social authentication successful',
        token: jwtToken,
        user: user.toPublicProfile()
      });
    } catch (error) {
      console.error('Social auth error:', error);
      res.status(500).json({
        message: 'Social authentication failed',
        error: error.message
      });
    }
  }

  async linkWallet(req, res) {
    try {
      const { address, signature } = req.body;

      if (!ethers.isAddress(address)) {
        return res.status(400).json({ message: 'Invalid Ethereum address' });
      }

      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Verify the signature
      const message = `Link wallet ${address} to TrustLink account\nNonce: ${user.nonce}`;
      const recoveredAddress = ethers.verifyMessage(message, signature);

      if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
        return res.status(401).json({ message: 'Invalid signature' });
      }

      // Update user's wallet address
      user.address = address.toLowerCase();
      user.nonce = crypto.randomBytes(32).toString('hex');
      await user.save();

      res.json({
        message: 'Wallet linked successfully',
        user: user.toPublicProfile()
      });
    } catch (error) {
      console.error('Link wallet error:', error);
      res.status(500).json({
        message: 'Failed to link wallet',
        error: error.message
      });
    }
  }

  // Helper method to verify social tokens
  async verifySocialToken(provider, token) {
    // For now, return a mock profile to prevent server crashes
    // This should be replaced with actual implementation
    console.log(`Verifying ${provider} token: ${token.substring(0, 10)}...`);
    
    return {
      name: 'Test User',
      email: 'test@example.com'
    };
    
    // Commented out incomplete implementation
    /*
    switch (provider) {
      case 'google':
        // Implement Google token verification
        break;
      case 'github':
        // Implement GitHub token verification
        break;
      case 'discord':
        // Implement Discord token verification
        break;
      default:
        throw new Error('Unsupported social provider');
    }
    */
  }
}

module.exports = new AuthController();