const express = require("express");
const router = express.Router();
const {
  getInventory,
  getInventoryByID,
  createInventory,
} = require("../controllers/inventory.controller");

router.get("/", getInventory);
router.get("/:id", getInventoryByID);
router.post("/", createInventory);

module.exports = router;
