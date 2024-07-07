//Import Mongoose library
const mongoose = require("mongoose");

// Define a new schema for the Product collection using the Mongoose schema constructor
const productSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number,
});

// This creates a new Mongoose model called 'Product'
//that maps to the 'products' collection in the MongoDB database
module.exports = mongoose.model("Product", productSchema);
