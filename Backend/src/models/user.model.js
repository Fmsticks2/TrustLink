const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  nonce: {
    type: String,
    required: true
  },
  ensName: String,
  email: {
    type: String,
    sparse: true,
    lowercase: true
  },
  profile: {
    name: String,
    title: String,
    bio: String,
    skills: [String],
    hourlyRate: Number,
    availability: {
      type: String,
      enum: ['Available', 'PartiallyAvailable', 'Unavailable'],
      default: 'Available'
    },
    timezone: String,
    languages: [{
      name: String,
      proficiency: {
        type: String,
        enum: ['Basic', 'Conversational', 'Fluent', 'Native']
      }
    }]
  },
  professional: {
    experience: [{
      title: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      current: Boolean,
      description: String
    }],
    education: [{
      institution: String,
      degree: String,
      field: String,
      startYear: Number,
      endYear: Number,
      description: String
    }],
    certifications: [{
      name: String,
      issuer: String,
      issueDate: Date,
      expiryDate: Date,
      credentialId: String,
      credentialUrl: String
    }]
  },
  portfolio: [{
    title: String,
    description: String,
    projectUrl: String,
    imageUrls: [String],
    technologies: [String],
    startDate: Date,
    endDate: Date
  }],
  social: {
    github: String,
    linkedin: String,
    twitter: String,
    website: String
  },
  verification: {
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    isPhoneVerified: {
      type: Boolean,
      default: false
    },
    isIdentityVerified: {
      type: Boolean,
      default: false
    },
    isPaymentVerified: {
      type: Boolean,
      default: false
    }
  },
  preferences: {
    emailNotifications: {
      type: Boolean,
      default: true
    },
    jobAlerts: {
      type: Boolean,
      default: true
    },
    messageNotifications: {
      type: Boolean,
      default: true
    },
    profileVisibility: {
      type: String,
      enum: ['Public', 'Private', 'Connections'],
      default: 'Public'
    }
  },
  stats: {
    totalEarnings: {
      type: Number,
      default: 0
    },
    completedJobs: {
      type: Number,
      default: 0
    },
    ongoingJobs: {
      type: Number,
      default: 0
    },
    successRate: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes
userSchema.index({ 'profile.skills': 1 });
userSchema.index({ 'profile.hourlyRate': 1 });
userSchema.index({ 'stats.averageRating': -1 });

// Methods
userSchema.methods.toPublicProfile = function() {
  return {
    address: this.address,
    ensName: this.ensName,
    profile: this.profile,
    stats: this.stats,
    verification: {
      isIdentityVerified: this.verification.isIdentityVerified,
      isPaymentVerified: this.verification.isPaymentVerified
    },
    portfolio: this.portfolio
  };
};

module.exports = mongoose.model('User', userSchema);