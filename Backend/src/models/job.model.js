const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  blockchainJobId: {
    type: String,
    required: true,
    unique: true
  },
  client: {
    type: String,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'Smart Contract Development',
      'UI/UX Design',
      'Content Writing',
      'Digital Marketing',
      'Data Science',
      'Blockchain Development',
      'Other'
    ]
  },
  subcategories: [String],
  requiredSkills: [String],
  budget: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'ETH'
    },
    isFixed: {
      type: Boolean,
      required: true
    }
  },
  timeline: {
    deadline: {
      type: Date,
      required: true
    },
    estimatedDuration: {
      value: Number,
      unit: {
        type: String,
        enum: ['Hours', 'Days', 'Weeks', 'Months']
      }
    },
    milestones: [{
      title: String,
      description: String,
      deadline: Date,
      amount: Number,
      status: {
        type: String,
        enum: ['Pending', 'InProgress', 'Completed', 'Disputed'],
        default: 'Pending'
      }
    }]
  },
  status: {
    type: String,
    enum: ['Draft', 'Open', 'InProgress', 'UnderReview', 'Completed', 'Cancelled', 'Disputed'],
    default: 'Open'
  },
  visibility: {
    type: String,
    enum: ['Public', 'Private', 'Invited'],
    default: 'Public'
  },
  proposals: [{
    blockchainProposalId: String,
    freelancer: {
      type: String,
      ref: 'User'
    },
    coverLetter: String,
    bid: {
      amount: Number,
      currency: String
    },
    estimatedDuration: {
      value: Number,
      unit: String
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected', 'Withdrawn'],
      default: 'Pending'
    },
    submittedAt: {
      type: Date,
      default: Date.now
    }
  }],
  selectedProposal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proposal'
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  requirements: {
    experienceLevel: {
      type: String,
      enum: ['Entry', 'Intermediate', 'Expert']
    },
    languages: [{
      name: String,
      proficiency: String
    }],
    location: {
      type: String,
      required: false
    },
    timezone: String
  },
  activity: [{
    type: {
      type: String,
      enum: ['StatusChange', 'ProposalReceived', 'MessageSent', 'MilestoneCompleted', 'Disputed']
    },
    description: String,
    timestamp: {
      type: Date,
      default: Date.now
    },
    actor: {
      type: String,
      ref: 'User'
    }
  }],
  metrics: {
    views: {
      type: Number,
      default: 0
    },
    proposals: {
      type: Number,
      default: 0
    },
    averageBid: {
      type: Number,
      default: 0
    }
  },
  escrow: {
    status: {
      type: String,
      enum: ['Pending', 'Funded', 'Released', 'Refunded'],
      default: 'Pending'
    },
    transactionHash: String,
    amount: Number,
    currency: String
  }
}, {
  timestamps: true
});

// Indexes
jobSchema.index({ category: 1, status: 1 });
jobSchema.index({ 'budget.amount': 1 });
jobSchema.index({ requiredSkills: 1 });
jobSchema.index({ 'timeline.deadline': 1 });

// Methods
jobSchema.methods.updateMetrics = async function() {
  const proposals = this.proposals || [];
  this.metrics.proposals = proposals.length;
  
  if (proposals.length > 0) {
    const totalBids = proposals.reduce((sum, proposal) => sum + proposal.bid.amount, 0);
    this.metrics.averageBid = totalBids / proposals.length;
  }
  
  await this.save();
};

jobSchema.methods.addActivity = function(type, description, actor) {
  this.activity.push({
    type,
    description,
    actor,
    timestamp: new Date()
  });
};

module.exports = mongoose.model('Job', jobSchema);