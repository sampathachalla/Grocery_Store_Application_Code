const db = require("../db");

(async () => {
  try {
    // ========== 1. CATEGORIES ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS categories (
        category_id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    // ========== 2. SUBCATEGORIES ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS subcategories (
        subcategory_id VARCHAR(36) PRIMARY KEY,
        category_id VARCHAR(36),
        name VARCHAR(255) NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
      );
    `);

    // ========== 3. PRODUCTS (Updated) ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id VARCHAR(36) PRIMARY KEY,
        subcategory_id VARCHAR(36),
        vendor_id VARCHAR(36),
        name VARCHAR(255),
        brand_name VARCHAR(255),
        description TEXT,
        price DECIMAL(10,2),
        unit VARCHAR(50),
        unit_description VARCHAR(100),
        max_order_quantity INT DEFAULT 100,
        min_order_quantity INT DEFAULT 1,
        stock INT DEFAULT 0,
        inventory_threshold INT DEFAULT 5,
        weight_in_grams INT,
        origin_country VARCHAR(100),
        discount_percent FLOAT DEFAULT 0,
        tax_percentage FLOAT DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        is_featured BOOLEAN DEFAULT FALSE,
        rating FLOAT DEFAULT 0,
        upvotes INT DEFAULT 0,
        downvotes INT DEFAULT 0,
        expiry_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id),
        FOREIGN KEY (vendor_id) REFERENCES users(user_id)
      );
    `);

    // ========== 4. PRODUCT IMAGES ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS product_images (
        image_id VARCHAR(36) PRIMARY KEY,
        product_id VARCHAR(36),
        image_url VARCHAR(1000),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);

    // ========== 5. PRODUCT TAGS ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS product_tags (
        tag_id VARCHAR(36) PRIMARY KEY,
        product_id VARCHAR(36),
        is_fast_delivery BOOLEAN DEFAULT FALSE,
        is_returnable BOOLEAN DEFAULT TRUE,
        is_cashback_eligible BOOLEAN DEFAULT FALSE,
        is_organic BOOLEAN DEFAULT FALSE,
        nutritional_info TEXT,
        storage_instructions VARCHAR(255),
        shelf_life_days INT,
        harvest_date DATE,
        FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);

    // ========== 6. OFFERS ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS offers (
        offer_id VARCHAR(36) PRIMARY KEY,
        applies_to_type ENUM('product', 'subcategory', 'category', 'cart'),
        applies_to_id VARCHAR(36),
        offer_type ENUM('discount', 'cashback', 'buy1get1'),
        discount_value FLOAT,
        min_cart_value DECIMAL(10,2) DEFAULT 0,
        max_discount FLOAT DEFAULT 0,
        customer_type ENUM('new_user', 'prime_only', 'all_users') DEFAULT 'all_users',
        offer_start_date DATE,
        offer_end_date DATE
      );
    `);

    // ========== 7. ADDRESSES ==========
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

    // ========== 8. ORDERS ==========
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

    // ========== 9. ORDER_ITEMS ==========
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

    // ========== 10. REVIEWS ==========
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

    // ========== 11. DELIVERY_AGENTS ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS delivery_agents (
        agent_id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        vehicle_details VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);

    // ========== 12. DELIVERY_STATUS_LOGS ==========
    await db.query(`
      CREATE TABLE IF NOT EXISTS delivery_status_logs (
        log_id VARCHAR(36) PRIMARY KEY,
        order_id VARCHAR(36),
        status ENUM('pending', 'dispatched', 'in_transit', 'delivered'),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
      );
    `);

    console.log("✅ All tables (except users) created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  } finally {
    process.exit();
  }
})();
