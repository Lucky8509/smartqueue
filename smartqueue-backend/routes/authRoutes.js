const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "vikas_secret";


// ================= REGISTER =================
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: "user"
    });

    // Save to DB
    await user.save();

    res.status(200).json(user);

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json("Server Error");
  }

});


// ================= LOGIN =================
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("User not found");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json("Invalid password");
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, SECRET);

    res.status(200).json({
      token: token,
      user: user
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json("Server Error");
  }

});

module.exports = router;