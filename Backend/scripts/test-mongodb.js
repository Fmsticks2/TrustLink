// MongoDB connection test script for TrustLink
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Get connection string from environment variables or use default
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/trustlink';

async function testMongoConnection() {
  console.log('Testing MongoDB connection...');
  console.log(`Connection URI: ${uri}`);
  
  const client = new MongoClient(uri);
  
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('✅ Successfully connected to MongoDB');
    
    // Get database and collection information
    const db = client.db();
    console.log(`\nDatabase name: ${db.databaseName}`);
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log('\nCollections in database:');
    if (collections.length === 0) {
      console.log('No collections found. Database might be empty.');
    } else {
      collections.forEach(collection => {
        console.log(`- ${collection.name}`);
      });
    }
    
    // Check for users collection and count documents
    console.log('\nChecking collections:');
    const userCount = await db.collection('users').countDocuments();
    console.log(`Users collection: ${userCount} documents`);
    
    const jobCount = await db.collection('jobs').countDocuments();
    console.log(`Jobs collection: ${jobCount} documents`);
    
    // Sample a user document if available
    if (userCount > 0) {
      console.log('\nSample user document:');
      const sampleUser = await db.collection('users').findOne({}, { projection: { _id: 1, address: 1, email: 1, 'profile.name': 1 } });
      console.log(JSON.stringify(sampleUser, null, 2));
    }
    
    // Sample a job document if available
    if (jobCount > 0) {
      console.log('\nSample job document:');
      const sampleJob = await db.collection('jobs').findOne({}, { projection: { _id: 1, title: 1, description: 1, budget: 1 } });
      console.log(JSON.stringify(sampleJob, null, 2));
    }
    
    console.log('\n✅ Database test completed successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

// Run the test
testMongoConnection().catch(console.error);