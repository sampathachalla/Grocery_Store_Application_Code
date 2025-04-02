const express = require("express");
const cors = require("cors");
const app = express();

// ✅ CORS Setup (required when frontend is on a different port)
app.use(
  cors({
    origin: "http://localhost:5173", // <-- your frontend URL
    credentials: true, // optional if you want to support cookies later
  })
);

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Default Root Route
app.get("/", (req, res) => {
  res.send("✅ Grocery Store API is running");
});

// ✅ API Routes
app.use("/users", require("./routes/users"));
app.use("/categories", require("./routes/categories"));
app.use("/subcategories", require("./routes/subcategories"));
app.use("/products", require("./routes/products"));
app.use("/addresses", require("./routes/addresses"));
app.use("/orders", require("./routes/orders"));
app.use("/order-items", require("./routes/order_items"));
app.use("/reviews", require("./routes/reviews"));
app.use("/delivery-agents", require("./routes/delivery_agents"));
app.use("/delivery-status", require("./routes/delivery_status_logs"));

// ✅ Start Server
app.listen(5000, () => console.log("API running on http://localhost:5000"));
