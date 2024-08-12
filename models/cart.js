//Import Mongoose library
const mongoose = require("mongoose");

// Define a new schema for the Cart collection using the Mongoose schema constructor
const cartSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// This creates a new Mongoose model called 'Cart'
//that maps to the 'carts' collection in the MongoDB database
module.exports = mongoose.model("Cart", cartSchema);
