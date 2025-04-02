const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM subcategories");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM subcategories WHERE subcategory_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { subcategory_id, category_id, name } = req.body;
    await db.query(
      "INSERT INTO subcategories (subcategory_id, category_id, name) VALUES (?, ?, ?)",
      [subcategory_id, category_id, name]
    );
    res.json({ message: "Subcategory created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { category_id, name } = req.body;
    await db.query(
      "UPDATE subcategories SET category_id=?, name=? WHERE subcategory_id=?",
      [category_id, name, req.params.id]
    );
    res.json({ message: "Subcategory updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM subcategories WHERE subcategory_id=?", [
      req.params.id,
    ]);
    res.json({ message: "Subcategory deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
