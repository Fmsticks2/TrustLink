// MongoDB shell script for testing TrustLink database
// Run with: mongosh mongodb://localhost:27017/trustlink mongosh-test.js

// Print connection information
print('\n=== TrustLink MongoDB Database Test ===');
print(`Connected to: ${db.getMongo().host}`);
print(`Current database: ${db.getName()}`);

// Check database stats
print('\n=== Database Stats ===');
printjson(db.stats());

// List all collections
print('\n=== Collections ===');
db.getCollectionNames().forEach(collection => {
  const count = db[collection].countDocuments();
  print(`${collection}: ${count} documents`);
});

// Check users collection
print('\n=== Sample Users ===');
if (db.users) {
  const userCount = db.users.countDocuments();
  print(`Total users: ${userCount}`);
  
  if (userCount > 0) {
    print('Sample user documents:');
    db.users.find({}, { address: 1, email: 1, 'profile.name': 1, _id: 0 }).limit(3).forEach(doc => printjson(doc));
  }
}

// Check jobs collection
print('\n=== Sample Jobs ===');
if (db.jobs) {
  const jobCount = db.jobs.countDocuments();
  print(`Total jobs: ${jobCount}`);
  
  if (jobCount > 0) {
    print('Sample job documents:');
    db.jobs.find({}, { title: 1, description: 1, budget: 1, _id: 0 }).limit(3).forEach(doc => printjson(doc));
  }
}

// Check proposals collection
print('\n=== Sample Proposals ===');
if (db.proposals) {
  const proposalCount = db.proposals.countDocuments();
  print(`Total proposals: ${proposalCount}`);
  
  if (proposalCount > 0) {
    print('Sample proposal documents:');
    db.proposals.find({}, { jobId: 1, freelancer: 1, bid: 1, _id: 0 }).limit(3).forEach(doc => printjson(doc));
  }
}

// Create a test document function
function createTestDocument(collectionName, document) {
  print(`\n=== Creating test document in ${collectionName} ===`);
  try {
    const result = db[collectionName].insertOne(document);
    print(`Document inserted with ID: ${result.insertedId}`);
    print('Test document:');
    printjson(document);
    return result.insertedId;
  } catch (error) {
    print(`Error creating test document: ${error.message}`);
    return null;
  }
}

// Uncomment to create test documents

const testUserId = createTestDocument('users', {
  address: '0xTestAddress123456789',
  nonce: 'testNonce123',
  email: 'test@example.com',
  profile: {
    name: 'Test User',
    bio: 'This is a test user created by the MongoDB test script'
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

if (testUserId) {
  const testJobId = createTestDocument('jobs', {
    blockchainJobId: '999999',
    client: testUserId,
    title: 'Test Job',
    description: 'This is a test job created by the MongoDB test script',
    category: 'Testing',
    subcategories: ['Database', 'MongoDB'],
    budget: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  
  // Create a test proposal for the job
  if (testJobId) {
    createTestDocument('proposals', {
      jobId: testJobId,
      blockchainProposalId: '888888',
      freelancer: '0xFreelancerAddress987654321',
      bid: 95,
      description: 'This is a test proposal created by the MongoDB test script',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}


print('\n=== MongoDB Test Complete ===');