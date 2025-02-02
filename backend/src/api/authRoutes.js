const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Import PostgreSQL database connection
require("dotenv").config();

const router = express.Router();

// 🔹 User Signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!role || !["client", "freelancer"].includes(role)) {
      return res.status(400).json({ message: "Invalid role. Must be 'client' or 'freelancer'." });
    }

    // Check if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await pool.query("INSERT INTO users (email, password, role) VALUES ($1, $2, $3)", [email, hashedPassword, role]);

    // Generate JWT token
    const token = jwt.sign(
        { userId: newUser.rows[0].id, role: newUser.rows[0].role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
        { userId: user.row[0].id, role: user.rows[0].role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
    );

    res.json({
        message: "Login successful",
        token,
        role: user.rows[0].role,
        dashboard: user.rows[0].role === "client" ? "/dashboard/client" : "/dashboard/freelancer"
    });
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 Protected Dashboard Route
router.get("/dashboard/:role", authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== req.params.role) {
      return res.status(403).json({ message: "Access denied" });
    }
    res.json({ message: `Welcome to ${req.params.role} dashboard` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = router;
