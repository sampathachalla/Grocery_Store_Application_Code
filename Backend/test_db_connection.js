// test_db_connection.js
const db = require("./db"); // Adjust path if needed (../db if inside helper_codes)

async function testConnection() {
  try {
    const [rows] = await db.query("SHOW TABLES");
    console.log("✅ Connected to RDS successfully.");
    console.log("📋 Tables found in the database:");
    console.table(rows);
  } catch (err) {
    console.error("❌ Failed to connect or fetch tables:", err);
  } finally {
    process.exit();
  }
}

testConnection();
