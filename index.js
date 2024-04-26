const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

//imports
const productRoute = require("./routes/product.route.js");
const inventoryRoute = require("./routes/inventory.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
app.use("/products", productRoute);
app.use("/inventory", inventoryRoute);

app.get("/", (req, res) => {
  res.send("Hello, welcome to the FTG backend!");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@backendapi.glg1xdr.mongodb.net/?retryWrites=true&w=majority&appName=BackendAPI`
  )
  .then(() => {
    console.log("DB connected");
    app.listen(`${port}`, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });

module.exports = app;
