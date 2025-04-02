const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM reviews");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM reviews WHERE review_id=?", [
      req.params.id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { review_id, user_id, product_id, rating, comment } = req.body;
    await db.query(
      "INSERT INTO reviews (review_id, user_id, product_id, rating, comment) VALUES (?, ?, ?, ?, ?)",
      [review_id, user_id, product_id, rating, comment]
    );
    res.json({ message: "Review created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { user_id, product_id, rating, comment } = req.body;
    await db.query(
      "UPDATE reviews SET user_id=?, product_id=?, rating=?, comment=? WHERE review_id=?",
      [user_id, product_id, rating, comment, req.params.id]
    );
    res.json({ message: "Review updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM reviews WHERE review_id=?", [req.params.id]);
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
