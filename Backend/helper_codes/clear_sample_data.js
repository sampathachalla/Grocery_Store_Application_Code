// clear_sample_data.js
const db = require("../db");

async function clearSampleData() {
  try {
    await db.query(`DELETE FROM delivery_status_logs`);
    await db.query(`DELETE FROM delivery_agents`);
    await db.query(`DELETE FROM reviews`);
    await db.query(`DELETE FROM order_items`);
    await db.query(`DELETE FROM orders`);
    await db.query(`DELETE FROM addresses`);
    await db.query(`DELETE FROM products`);
    await db.query(`DELETE FROM subcategories`);
    await db.query(`DELETE FROM categories`);

    console.log("✅ All tables cleared successfully.");
  } catch (err) {
    console.error("❌ Error clearing data:", err);
  } finally {
    process.exit();
  }
}

clearSampleData();
