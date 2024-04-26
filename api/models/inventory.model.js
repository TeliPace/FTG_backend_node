const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema({
  sku: {
    type: Number,
    required: true,
  },
  client_sku: {
    type: String,
    required: false,
  },
  total_quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  total_allocated_quantity: {
    type: Number,
    required: false,
    default: 0,
  },
});

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
