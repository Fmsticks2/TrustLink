const express = require("express");
const { ethers } = require("ethers");
require("dotenv").config();

const router = express.Router();

// Blockchain connection
const provider = new ethers.JsonRpcProvider(process.env.MOVEMENT_RPC_URL);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  require("../../config/abi.json"), // Smart contract ABI
  provider
);

// Fetch blockchain data
router.get("/getData", async (req, res) => {
  try {
    const data = await contract.getData(); // Example smart contract function
    res.json({ blockchainData: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Blockchain error" });
  }
});

module.exports = router;
