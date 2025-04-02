const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM categories");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM categories WHERE category_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM subcategories WHERE category_id=?",
      [req.params.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { category_id, name } = req.body;
    await db.query("INSERT INTO categories (category_id, name) VALUES (?, ?)", [
      category_id,
      name,
    ]);
    res.json({ message: "Category created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { name } = req.body;
    await db.query("UPDATE categories SET name=? WHERE category_id=?", [
      name,
      req.params.id,
    ]);
    res.json({ message: "Category updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM categories WHERE category_id=?", [
      req.params.id,
    ]);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
