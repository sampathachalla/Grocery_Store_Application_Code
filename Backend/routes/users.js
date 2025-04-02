// routes/users.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// Auth routes
router.post("/signup", controller.signup);
router.post("/login", controller.login);

// User CRUD routes
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
