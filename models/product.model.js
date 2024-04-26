const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    sku: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
    weight: {
      type: Number,
      required: false,
      default: 0,
    },
    prices: {
      type: Object,
      required: true,
      sales_price: {
        type: Number,
        default: 0,
      },
      cost_price: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
