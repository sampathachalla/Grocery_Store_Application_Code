const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders WHERE order_id=?", [
      req.params.id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { order_id, user_id, address_id, total_price, status } = req.body;
    await db.query(
      "INSERT INTO orders (order_id, user_id, address_id, total_price, status) VALUES (?, ?, ?, ?, ?)",
      [order_id, user_id, address_id, total_price, status]
    );
    res.json({ message: "Order created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { user_id, address_id, total_price, status } = req.body;
    await db.query(
      "UPDATE orders SET user_id=?, address_id=?, total_price=?, status=? WHERE order_id=?",
      [user_id, address_id, total_price, status, req.params.id]
    );
    res.json({ message: "Order updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM orders WHERE order_id=?", [req.params.id]);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
