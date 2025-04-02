// controllers/userController.js
const db = require("../db");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// Get all users
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE user_id=?", [
      req.params.id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Signup (Register)
exports.signup = async (req, res) => {
  try {
    const { fullName, email, password, accountType } = req.body;

    if (!fullName || !email || !password || !accountType) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email already exists
    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res
        .status(409)
        .json({ error: "User already exists with this email" });
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    const user_id = uuidv4();

    await db.query(
      "INSERT INTO users (user_id, username, email, password_hash, role) VALUES (?, ?, ?, ?, ?)",
      [user_id, fullName, email, password_hash, accountType]
    );

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query("SELECT * FROM users WHERE email=?", [email]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user
exports.update = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    let query = "UPDATE users SET username=?, email=?, role=? WHERE user_id=?";
    let params = [username, email, role, req.params.id];

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, salt);
      query =
        "UPDATE users SET username=?, email=?, password_hash=?, role=? WHERE user_id=?";
      params = [username, email, password_hash, role, req.params.id];
    }

    await db.query(query, params);
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM users WHERE user_id=?", [req.params.id]);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
