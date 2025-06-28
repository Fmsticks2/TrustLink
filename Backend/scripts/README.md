# TrustLink Database Testing Scripts

This directory contains scripts for testing and interacting with the TrustLink MongoDB database.

## Available Scripts

### 1. Node.js MongoDB Test Script

**File:** `test-mongodb.js`

This script uses the MongoDB Node.js driver to connect to your database, list collections, and display sample documents.

**Requirements:**
- Node.js installed
- MongoDB connection string in `.env` file or it will use the default `mongodb://localhost:27017/trustlink`

**How to run:**
```bash
node test-mongodb.js
```

Or use the batch file on Windows:
```
run-mongodb-test.bat
```

### 2. MongoDB Shell Script

**File:** `mongosh-test.js`

This script is designed to be run directly with the MongoDB Shell (`mongosh`). It provides detailed information about your database and collections.

**Requirements:**
- MongoDB Shell (`mongosh`) installed
- MongoDB server running

**How to run:**
```bash
mongosh mongodb://localhost:27017/trustlink mongosh-test.js
```

Or use the batch file on Windows:
```
run-mongosh-test.bat
```

You can modify the connection string in the batch file or command line as needed to match your MongoDB configuration.

**Test Data Creation:**

The script includes functionality to create test data in your database. This is useful for:
- Testing application functionality with sample data
- Verifying database schema and relationships
- Troubleshooting application issues

The test data includes:
- A sample user with profile information
- A sample job linked to the user
- A sample proposal for the job

## Testing Database Connection

If you're experiencing connection issues with the TrustLink application, these scripts can help verify:

1. If MongoDB is running and accessible
2. If the connection string is correct
3. If the database and collections exist
4. If there are documents in the collections

## Troubleshooting with Test Data

After creating test data using the MongoDB Shell script:

1. **Verify Data Creation**: Run the script again without modifying it to see if the test data appears in the sample output sections
2. **Check Application Behavior**: Restart your TrustLink application to see if it can interact with the test data
3. **Inspect Data Structure**: Use the created test data to understand the expected schema and relationships

If your application still has issues after creating test data, check:

- Application logs for specific errors related to data validation or schema
- Environment variables to ensure the application is connecting to the same database
- API endpoints that interact with the collections containing test data

## Creating Test Data

The `mongosh-test.js` script includes code for creating test documents. To use this feature:

1. Run the script using the `run-mongosh-test.bat` batch file or directly with mongosh
2. The script will automatically create:
   - A test user with profile information
   - A test job linked to the user
   - A test proposal for the job

If you want to disable test data creation:

1. Open the `mongosh-test.js` script
2. Comment out the test data creation section by adding `/*` before and `*/` after the section
3. Save and run the script again

## Troubleshooting

If you encounter connection errors:

1. Verify MongoDB is running with `mongosh` or MongoDB Compass
2. Check your connection string in the `.env` file
3. Ensure your firewall allows connections to MongoDB port (default: 27017)
4. Check MongoDB logs for any errors