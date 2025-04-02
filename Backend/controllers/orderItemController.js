const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM order_items");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM order_items WHERE order_item_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { order_item_id, order_id, product_id, quantity, price } = req.body;
    await db.query(
      "INSERT INTO order_items (order_item_id, order_id, product_id, quantity, price) VALUES (?, ?, ?, ?, ?)",
      [order_item_id, order_id, product_id, quantity, price]
    );
    res.json({ message: "Order item created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    await db.query(
      "UPDATE order_items SET order_id=?, product_id=?, quantity=?, price=? WHERE order_item_id=?",
      [order_id, product_id, quantity, price, req.params.id]
    );
    res.json({ message: "Order item updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM order_items WHERE order_item_id=?", [
      req.params.id,
    ]);
    res.json({ message: "Order item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
