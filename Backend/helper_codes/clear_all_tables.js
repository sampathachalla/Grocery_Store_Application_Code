// clear_all_tables.js
const db = require("../db");

(async () => {
  try {
    // Order matters due to foreign keys (child to parent)
    await db.query(`DROP TABLE IF EXISTS delivery_status_logs`);
    await db.query(`DROP TABLE IF EXISTS delivery_agents`);
    await db.query(`DROP TABLE IF EXISTS reviews`);
    await db.query(`DROP TABLE IF EXISTS order_items`);
    await db.query(`DROP TABLE IF EXISTS orders`);
    await db.query(`DROP TABLE IF EXISTS addresses`);
    await db.query(`DROP TABLE IF EXISTS products`);
    await db.query(`DROP TABLE IF EXISTS subcategories`);
    await db.query(`DROP TABLE IF EXISTS categories`);

    console.log("✅ All tables dropped successfully (Database cleared)");
  } catch (err) {
    console.error("❌ Error clearing tables:", err);
  } finally {
    process.exit();
  }
})();
