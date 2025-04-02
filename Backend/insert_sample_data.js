const db = require("./db");

async function insertSampleData() {
  try {
    // ---------- CATEGORIES ----------
    await db.query(`INSERT INTO categories (category_id, name) VALUES
        ('c1', 'Meat'), ('c2', 'Dairy'), ('c3', 'Vegetables'), ('c4', 'Fruits'),
        ('c5', 'Snacks'), ('c6', 'Beverages'), ('c7', 'Bakery'), ('c8', 'Seafood'),
        ('c9', 'Frozen Foods'), ('c10', 'Health & Wellness')`);

    // ---------- SUBCATEGORIES ----------
    await db.query(`INSERT INTO subcategories (subcategory_id, category_id, name) VALUES
        ('sc1', 'c1', 'Chicken'), ('sc2', 'c1', 'Beef'), ('sc3', 'c2', 'Milk'),
        ('sc4', 'c2', 'Cheese'), ('sc5', 'c3', 'Leafy Greens'), ('sc6', 'c3', 'Root Vegetables'),
        ('sc7', 'c4', 'Citrus Fruits'), ('sc8', 'c5', 'Chips'), ('sc9', 'c6', 'Soft Drinks'),
        ('sc10', 'c7', 'Bread')`);

    // ---------- PRODUCTS (linked to real vendor IDs) ----------
    await db.query(`INSERT INTO products (product_id, subcategory_id, vendor_id, name, price, stock, rating, upvotes, downvotes) VALUES
        ('p1', 'sc1', '8ca5b277-12ad-4659-b123-2132899f2eb0', 'Fresh Chicken Breast', 9.99, 100, 4.5, 30, 2),
        ('p2', 'sc2', '8ca5b277-12ad-4659-b123-2132899f2eb0', 'Premium Beef Steak', 14.99, 50, 4.8, 45, 1),
        ('p3', 'sc3', 'fc018f99-1434-48be-b369-e17bb24d68d5', 'Organic Milk 1L', 4.50, 200, 4.2, 40, 3),
        ('p4', 'sc4', 'fc018f99-1434-48be-b369-e17bb24d68d5', 'Cheddar Cheese Block', 5.25, 80, 4.6, 25, 1),
        ('p5', 'sc5', '8ca5b277-12ad-4659-b123-2132899f2eb0', 'Fresh Spinach', 2.99, 150, 4.1, 20, 5),
        ('p6', 'sc6', '8ca5b277-12ad-4659-b123-2132899f2eb0', 'Organic Carrots', 1.99, 180, 4.3, 18, 2),
        ('p7', 'sc7', '7387701a-c2c1-4322-8bf0-6000f24c9de6', 'Lemon', 3.50, 140, 4.0, 10, 1),
        ('p8', 'sc8', '7387701a-c2c1-4322-8bf0-6000f24c9de6', 'Potato Chips', 2.50, 300, 4.7, 50, 4),
        ('p9', 'sc9', '7387701a-c2c1-4322-8bf0-6000f24c9de6', 'Coca-Cola Can', 1.20, 500, 4.5, 60, 6),
        ('p10', 'sc10', '7387701a-c2c1-4322-8bf0-6000f24c9de6', 'Whole Wheat Bread', 2.20, 90, 4.4, 15, 0)`);

    // ---------- ADDRESSES (linked to real customers) ----------
    await db.query(`INSERT INTO addresses (address_id, user_id, address_line, city, state, postal_code, country) VALUES
        ('a1', '5ca440c4-8f5f-42ea-ae50-467a902a89de', '12 Baker St', 'New York', 'NY', '10001', 'USA'),
        ('a2', 'abce9aea-e412-4de3-bbbd-4d9211d99e0b', '78 Lake View', 'Los Angeles', 'CA', '90001', 'USA'),
        ('a3', 'dd875676-9d4d-4158-ac03-cdf308439b49', '45 Green Road', 'Chicago', 'IL', '60007', 'USA')`);

    // ---------- ORDERS ----------
    await db.query(`INSERT INTO orders (order_id, user_id, address_id, total_price, status) VALUES
        ('o1', '5ca440c4-8f5f-42ea-ae50-467a902a89de', 'a1', 59.99, 'pending'),
        ('o2', 'abce9aea-e412-4de3-bbbd-4d9211d99e0b', 'a2', 89.50, 'confirmed'),
        ('o3', 'dd875676-9d4d-4158-ac03-cdf308439b49', 'a3', 30.25, 'delivered')`);

    // ---------- ORDER ITEMS ----------
    await db.query(`INSERT INTO order_items (order_item_id, order_id, product_id, quantity, price) VALUES
        ('oi1', 'o1', 'p1', 2, 19.98),
        ('oi2', 'o2', 'p2', 1, 14.99),
        ('oi3', 'o3', 'p3', 3, 13.50)`);

    // ---------- REVIEWS ----------
    await db.query(`INSERT INTO reviews (review_id, user_id, product_id, rating, comment) VALUES
        ('r1', '5ca440c4-8f5f-42ea-ae50-467a902a89de', 'p1', 5, 'Excellent product!'),
        ('r2', 'abce9aea-e412-4de3-bbbd-4d9211d99e0b', 'p2', 4, 'Good quality beef.'),
        ('r3', 'dd875676-9d4d-4158-ac03-cdf308439b49', 'p3', 3, 'Milk was okay.')`);

    // ---------- DELIVERY AGENTS ----------
    await db.query(`INSERT INTO delivery_agents (agent_id, user_id, vehicle_details) VALUES
        ('d1', '159ef6cb-d756-49de-9bc2-172476366a9b', 'Van - TX1234'),
        ('d2', '20ed7972-c468-4a38-940a-5ca0563a3333', 'Bike - BK0987'),
        ('d3', '45d6cf08-776e-478a-a55e-63850bde6914', 'Truck - TR5566')`);

    // ---------- DELIVERY STATUS LOGS ----------
    await db.query(`INSERT INTO delivery_status_logs (log_id, order_id, status) VALUES
        ('l1', 'o1', 'pending'),
        ('l2', 'o2', 'dispatched'),
        ('l3', 'o3', 'delivered')`);

    console.log("✅ Sample data inserted successfully (using real users)");
  } catch (err) {
    console.error("❌ Error inserting sample data:", err);
  } finally {
    process.exit();
  }
}

insertSampleData();
