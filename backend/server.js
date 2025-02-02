const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// Allow frontend to communicate with backend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Import routes
const authRoutes = require("./src/api/authRoutes");
const blockchainRoutes = require("./src/api/blockchainRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/blockchain", blockchainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
