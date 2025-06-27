const hre = require('hardhat');

async function main() {
  console.log('Deploying TrustLink contract...');

  // Deploy mock ERC20 token for testing if we're on a test network
  let paymentTokenAddress;
  paymentTokenAddress = process.env.PAYMENT_TOKEN_ADDRESS;
  console.log('Using payment token:', paymentTokenAddress);

  // Platform fee in basis points (e.g., 250 = 2.5%)
  const platformFee = 250;

  // Deploy TrustLink contract
  const TrustLink = await hre.ethers.getContractFactory('TrustLink');
  const trustLink = await TrustLink.deploy(paymentTokenAddress, platformFee);
  await trustLink.deployed();

  console.log('TrustLink deployed to:', trustLink.address);
  console.log('Payment token address:', paymentTokenAddress);
  console.log('Platform fee:', platformFee, 'basis points');

  // Wait for block confirmations
  if (network.name !== 'hardhat' && network.name !== 'localhost') {
    console.log('Waiting for block confirmations...');
    await trustLink.deployTransaction.wait(6);
    console.log('Contract deployment confirmed!');
  }

  // Save deployment info
  const fs = require('fs');
  const deploymentInfo = {
    network: network.name,
    trustLinkAddress: trustLink.address,
    paymentTokenAddress: paymentTokenAddress,
    platformFee: platformFee,
    deploymentTime: new Date().toISOString(),
  };

  fs.writeFileSync(
    `deployment-${network.name}.json`,
    JSON.stringify(deploymentInfo, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });