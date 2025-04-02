const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const { category_id, subcategory_id, limit = 20, offset = 0 } = req.query;

    let query = `SELECT p.*, s.category_id FROM products p 
                 JOIN subcategories s ON p.subcategory_id = s.subcategory_id`;
    let conditions = [];
    let params = [];

    if (category_id) {
      conditions.push("s.category_id = ?");
      params.push(category_id);
    }
    if (subcategory_id) {
      conditions.push("p.subcategory_id = ?");
      params.push(subcategory_id);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " LIMIT ? OFFSET ?";
    params.push(parseInt(limit), parseInt(offset));

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE product_id=?", [
      req.params.id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const {
      product_id,
      subcategory_id,
      vendor_id,
      name,
      price,
      stock,
      rating,
      upvotes,
      downvotes,
    } = req.body;

    await db.query(
      "INSERT INTO products (product_id, subcategory_id, vendor_id, name, price, stock, rating, upvotes, downvotes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        product_id,
        subcategory_id,
        vendor_id,
        name,
        price,
        stock,
        rating,
        upvotes,
        downvotes,
      ]
    );

    res.json({ message: "Product created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const {
      subcategory_id,
      vendor_id,
      name,
      price,
      stock,
      rating,
      upvotes,
      downvotes,
    } = req.body;

    await db.query(
      "UPDATE products SET subcategory_id=?, vendor_id=?, name=?, price=?, stock=?, rating=?, upvotes=?, downvotes=? WHERE product_id=?",
      [
        subcategory_id,
        vendor_id,
        name,
        price,
        stock,
        rating,
        upvotes,
        downvotes,
        req.params.id,
      ]
    );

    res.json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM products WHERE product_id=?", [req.params.id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
