# TrustLink - Decentralized Freelance Platform

TrustLink is a decentralized freelance marketplace built on Citrea zkEVM that connects clients with talented freelancers while ensuring secure and transparent transactions through blockchain technology.

## Project Structure

```
TrustLink/
├── Frontend/           # React-based frontend application
├── Backend/            # Node.js backend server
└── Blockchain/         # Smart contracts and blockchain integration
```

## Features

- **Decentralized Identity**: Web3 wallet integration with ENS support
- **Smart Contract-based Escrow**: Secure payment handling
- **Comprehensive User Profiles**: Detailed freelancer and client profiles
- **Advanced Job Management**: Create, track, and manage jobs
- **Proposal System**: Submit and manage job proposals
- **Multi-chain Support**: Built on Citrea zkEVM
- **Social Integration**: Multiple authentication options

## Technology Stack

### Frontend
- React.js with Vite
- Wagmi (Ethereum interactions)
- TailwindCSS (Styling)
- React Context (State management)
- Ethers.js (Blockchain integration)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- AWS S3 (File storage)

### Blockchain
- Solidity
- Citrea zkEVM
- OpenZeppelin Contracts
- Hardhat (Development environment)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Citrea zkEVM Wallet
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trustlink.git
cd trustlink
```

2. Install Frontend dependencies:
```bash
cd Frontend
npm install
cp .env.example .env  # Configure environment variables
```

3. Install Backend dependencies:
```bash
cd ../Backend
npm install
cp .env.example .env  # Configure environment variables
```

4. Install and compile smart contracts:
```bash
cd ../Blockchain
npm install
cp .env.example .env  # Configure environment variables
npx hardhat compile
```

### Running the Application

1. Start the backend server:
```bash
cd Backend
npm run dev
```

2. Start the frontend application:
```bash
cd Frontend
npm run dev
```

3. Run blockchain tests:
```bash
cd Blockchain
npx hardhat test
```

## Testing

### Frontend Tests
```bash
cd Frontend
npm test
```

### Backend Tests
```bash
cd Backend
npm test
```

### Smart Contract Tests
```bash
cd Blockchain
npx hardhat test
```

## Deployment

For detailed deployment instructions, please refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Best Practices

- Never commit sensitive information or private keys
- Use environment variables for all secrets
- Regularly update dependencies
- Follow security best practices for Web3 development
- Implement proper input validation
- Use secure authentication methods
- Regular security audits

## Support

For support, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.