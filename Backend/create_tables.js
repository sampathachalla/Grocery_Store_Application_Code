const db = require("./db");

(async () => {
  try {
    // 1. USERS (updated roles)
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        user_id VARCHAR(36) PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('staff', 'superAdmin', 'customer', 'vendor', 'delivery') NOT NULL
      );
    `);

    // 2. CATEGORIES
    await db.query(`
      CREATE TABLE IF NOT EXISTS categories (
        category_id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    // 3. SUBCATEGORIES
    await db.query(`
      CREATE TABLE IF NOT EXISTS subcategories (
        subcategory_id VARCHAR(36) PRIMARY KEY,
        category_id VARCHAR(36),
        name VARCHAR(255) NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
      );
    `);

    // 4. PRODUCTS
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id VARCHAR(36) PRIMARY KEY,
        subcategory_id VARCHAR(36),
        vendor_id VARCHAR(36),
        name VARCHAR(255),
        price DECIMAL(10,2),
        stock INT,
        rating FLOAT,
        upvotes INT DEFAULT 0,
        downvotes INT DEFAULT 0,
        FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id),
        FOREIGN KEY (vendor_id) REFERENCES users(user_id)
      );
    `);

    // 5. ADDRESSES
    await db.query(`
      CREATE TABLE IF NOT EXISTS addresses (
        address_id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        address_line VARCHAR(255),
        city VARCHAR(100),
        state VARCHAR(100),
        postal_code VARCHAR(20),
        country VARCHAR(100),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);

    // 6. ORDERS
    await db.query(`
      CREATE TABLE IF NOT EXISTS orders (
        order_id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        address_id VARCHAR(36),
        total_price DECIMAL(10,2),
        status ENUM('pending', 'confirmed', 'dispatched', 'delivered', 'cancelled') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (address_id) REFERENCES addresses(address_id)
      );
    `);

    // 7. ORDER_ITEMS
    await db.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        order_item_id VARCHAR(36) PRIMARY KEY,
        order_id VARCHAR(36),
        product_id VARCHAR(36),
        quantity INT,
        price DECIMAL(10,2),
        FOREIGN KEY (order_id) REFERENCES orders(order_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);

    // 8. REVIEWS
    await db.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        review_id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        product_id VARCHAR(36),
        rating INT,
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);

    // 9. DELIVERY_AGENTS (optional)
    await db.query(`
      CREATE TABLE IF NOT EXISTS delivery_agents (
        agent_id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        vehicle_details VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);

    // 10. DELIVERY_STATUS_LOGS
    await db.query(`
      CREATE TABLE IF NOT EXISTS delivery_status_logs (
        log_id VARCHAR(36) PRIMARY KEY,
        order_id VARCHAR(36),
        status ENUM('pending', 'dispatched', 'in_transit', 'delivered'),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
      );
    `);

    console.log("✅ All tables created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  } finally {
    process.exit();
  }
})();
