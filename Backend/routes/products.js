const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/", controller.getAll); // ✅ Enhanced to support filters
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
