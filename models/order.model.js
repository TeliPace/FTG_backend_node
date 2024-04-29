const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    client_order_id: {
      type: String,
      default: null,
      required: false,
    },
    lines: {
      type: Array,
      sku: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 0,
      },
      sales_value: {
        type: Object,
        required: true,
        amount: {
          type: Number,
          required: true,
        },
        currency: {
          type: String,
          required: true,
        },
      },
      batch_requirements: {
        type: Object,
        default: null,
        required: false,
        min_expiry_date: {
          type: String,
          default: null,
          required: false,
        },
      },
    },
    address: {
      type: Object,
      required: true,
      name: {
        type: String,
        required: true,
      },
      line_one: {
        type: String,
        required: true,
      },
      line_two: {
        type: String,
        required: true,
      },
      line_three: {
        type: String,
        default: null,
        required: false,
      },
      line_four: {
        type: String,
        default: null,
        required: false,
      },
      town: {
        type: String,
        default: null,
        required: false,
      },
      country_code: {
        type: String,
        required: true,
      },
      postcode: {
        type: String,
        required: true,
      },
      email_address: {
        type: String,
        default: null,
        required: false,
      },
      phone_number: {
        type: String,
        default: null,
        required: false,
      },
    },
    shipping_service: {
      type: String,
      default: null,
      required: false,
    },
    note: {
      type: String,
      default: null,
      required: false,
    },
    channel: {
      type: String,
      default: null,
      required: false,
    },
    order_options: {
      type: Object,
      default: null,
      required: false,
      has_dispatch_note: {
        type: Boolean,
        default: null,
        required: false,
      },
    },
    customer_type: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
