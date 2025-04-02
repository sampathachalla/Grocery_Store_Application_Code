const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/:id/subcategories", controller.getSubcategoriesByCategory); // ✅ NEW
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
