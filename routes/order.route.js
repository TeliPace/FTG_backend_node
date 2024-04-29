const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/order.controller");

router.post("/", createOrder);

module.exports = router;
