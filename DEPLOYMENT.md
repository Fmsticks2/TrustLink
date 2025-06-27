# TrustLink Deployment Guide

## Table of Contents
- [Prerequisites](#prerequisites)
- [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
- [Backend Deployment (Render)](#backend-deployment-render)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v16 or higher)
- Git repository with your TrustLink project
- Accounts on:
  - [Vercel](https://vercel.com)
  - [Render](https://render.com)
  - [MongoDB Atlas](https://www.mongodb.com/atlas) (for database)
  - [AWS](https://aws.amazon.com) (for file storage)

## Frontend Deployment (Vercel)

### Step 1: Prepare Your Frontend

1. Ensure your frontend code is in the `Frontend` directory
2. Copy `.env.example` to `.env` and update variables
3. Test locally using:
   ```bash
   npm install
   npm run dev
   ```

### Step 2: Deploy to Vercel

1. Push your code to GitHub
2. Log in to Vercel
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Vite
   - Root Directory: `Frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Step 3: Configure Environment Variables

1. In Vercel dashboard, go to Project Settings > Environment Variables
2. Add the following variables:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   VITE_CITREA_RPC_URL=https://rpc.citrea.xyz
   VITE_CITREA_CHAIN_ID=1001
   VITE_TRUSTLINK_CONTRACT_ADDRESS=your_contract_address
   VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
   ```

## Backend Deployment (Render)

### Step 1: Prepare Your Backend

1. Ensure your backend code is in the `Backend` directory
2. Verify `render.yaml` configuration
3. Test locally using:
   ```bash
   npm install
   npm start
   ```

### Step 2: Deploy to Render

1. Log in to Render
2. Click "New Web Service"
3. Connect your GitHub repository
4. Configure service:
   - Name: trustlink-api
   - Environment: Node
   - Region: Frankfurt (or preferred region)
   - Branch: main
   - Root Directory: `Backend`

### Step 3: Configure Environment Variables

1. In Render dashboard, go to Environment
2. Add the following variables:
   ```
   NODE_ENV=production
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret
   CITREA_RPC_URL=https://rpc.citrea.xyz
   CITREA_CHAIN_ID=1001
   OPERATOR_PRIVATE_KEY=your_private_key
   TRUSTLINK_CONTRACT_ADDRESS=your_contract_address
   AWS_ACCESS_KEY_ID=your_aws_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret
   AWS_REGION=your_aws_region
   AWS_BUCKET_NAME=your_bucket_name
   ```

## Environment Variables

### Frontend (.env)
```env
# API Configuration
VITE_API_URL=https://your-backend-url.onrender.com/api
VITE_API_TIMEOUT=30000

# Blockchain Configuration
VITE_CITREA_RPC_URL=https://rpc.citrea.xyz
VITE_CITREA_CHAIN_ID=1001
VITE_TRUSTLINK_CONTRACT_ADDRESS=your_contract_address

# Authentication
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
```

### Backend (.env)
```env
# Server Configuration
PORT=8080
NODE_ENV=production

# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_secure_jwt_secret

# Blockchain
CITREA_RPC_URL=https://rpc.citrea.xyz
CITREA_CHAIN_ID=1001
OPERATOR_PRIVATE_KEY=your_private_key
TRUSTLINK_CONTRACT_ADDRESS=your_contract_address

# File Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_bucket_name
```

## Troubleshooting

### Frontend Issues

1. **Build Failures**
   - Verify all dependencies are correctly listed in package.json
   - Check build logs in Vercel dashboard
   - Ensure environment variables are properly set

2. **API Connection Issues**
   - Verify VITE_API_URL is correct
   - Check CORS configuration in backend
   - Verify API endpoints are accessible

### Backend Issues

1. **Database Connection**
   - Verify MONGODB_URI is correct
   - Check MongoDB Atlas network access settings
   - Ensure IP whitelist includes Render's IPs

2. **File Upload Issues**
   - Verify AWS credentials and permissions
   - Check S3 bucket CORS configuration
   - Verify file size limits in both frontend and backend

3. **Blockchain Integration**
   - Verify contract addresses are correct
   - Check RPC URL accessibility
   - Ensure private keys are properly secured

### Security Best Practices

1. **Environment Variables**
   - Never commit .env files to Git
   - Use strong, unique values for secrets
   - Regularly rotate API keys and secrets

2. **Access Control**
   - Implement proper CORS policies
   - Use secure headers (helmet.js)
   - Rate limit API endpoints

3. **Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Monitor API performance
   - Set up alerts for critical errors