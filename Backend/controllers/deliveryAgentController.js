const db = require("../db");
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM delivery_agents");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM delivery_agents WHERE agent_id=?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.create = async (req, res) => {
  try {
    const { agent_id, user_id, vehicle_details } = req.body;
    await db.query(
      "INSERT INTO delivery_agents (agent_id, user_id, vehicle_details) VALUES (?, ?, ?)",
      [agent_id, user_id, vehicle_details]
    );
    res.json({ message: "Delivery agent created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { user_id, vehicle_details } = req.body;
    await db.query(
      "UPDATE delivery_agents SET user_id=?, vehicle_details=? WHERE agent_id=?",
      [user_id, vehicle_details, req.params.id]
    );
    res.json({ message: "Delivery agent updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM delivery_agents WHERE agent_id=?", [
      req.params.id,
    ]);
    res.json({ message: "Delivery agent deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
