const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM delivery_status_logs");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM delivery_status_logs WHERE log_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { log_id, order_id, status } = req.body;
    await db.query(
      "INSERT INTO delivery_status_logs (log_id, order_id, status) VALUES (?, ?, ?)",
      [log_id, order_id, status]
    );
    res.json({ message: "Delivery status log created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { order_id, status } = req.body;
    await db.query(
      "UPDATE delivery_status_logs SET order_id=?, status=? WHERE log_id=?",
      [order_id, status, req.params.id]
    );
    res.json({ message: "Delivery status log updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM delivery_status_logs WHERE log_id=?", [
      req.params.id,
    ]);
    res.json({ message: "Delivery status log deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
