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
- React.js
- Wagmi (Ethereum interactions)
- TailwindCSS (Styling)
- Vite (Build tool)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Blockchain
- Solidity
- Citrea zkEVM
- OpenZeppelin Contracts

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Citrea zkEVM Wallet

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
```

3. Install Backend dependencies:
```bash
cd ../Backend
npm install
```

4. Set up environment variables:
```bash
cp Backend/.env.example Backend/.env
# Edit .env with your configuration
```

5. Deploy smart contracts:
```bash
cd ../Blockchain
npm install
npx hardhat compile
npx hardhat deploy --network citrea
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
npm start
```

## Smart Contract Architecture

The TrustLink smart contract system consists of the following components:

- **TrustLink.sol**: Main contract handling jobs, proposals, and payments
- **User Profiles**: On-chain verification and reputation system
- **Escrow System**: Secure payment handling with milestone support

## API Documentation

API documentation is available at `/api-docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- All smart contracts are thoroughly tested and audited
- Backend implements rate limiting and security best practices
- Frontend uses secure wallet connections and data handling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/trustlink](https://github.com/yourusername/trustlink)