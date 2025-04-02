const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM addresses");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM addresses WHERE address_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const {
      address_id,
      user_id,
      address_line,
      city,
      state,
      postal_code,
      country,
    } = req.body;
    await db.query(
      "INSERT INTO addresses (address_id, user_id, address_line, city, state, postal_code, country) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [address_id, user_id, address_line, city, state, postal_code, country]
    );
    res.json({ message: "Address created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { user_id, address_line, city, state, postal_code, country } =
      req.body;
    await db.query(
      "UPDATE addresses SET user_id=?, address_line=?, city=?, state=?, postal_code=?, country=? WHERE address_id=?",
      [user_id, address_line, city, state, postal_code, country, req.params.id]
    );
    res.json({ message: "Address updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM addresses WHERE address_id=?", [req.params.id]);
    res.json({ message: "Address deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
