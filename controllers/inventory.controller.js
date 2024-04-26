const Inventory = require("../models/inventory.model");

const getInventory = async (req, res) => {
  try {
    console.log(req.query.sku);
    if (req.query.sku) {
      const inventory = await Inventory.find({ sku: req.query.sku });
      res.status(200).json(inventory);
    } else {
      const inventory = await Inventory.find({});

      res.status(200).json(inventory);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInventoryByID = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findById(id);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInventory,
  getInventoryByID,
  createInventory,
};
