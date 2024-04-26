const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductByID,
  createProduct,
  updateProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProductByID);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
