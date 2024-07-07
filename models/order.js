//Import Mongoose library
const mongoose = require("mongoose");

// Define a new schema for the Product collection using the Mongoose schema constructor
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  orderDate: { type: Date, default: Date.now },
});

// This creates a new Mongoose model called 'Order'
//that maps to the 'orders' collection in the MongoDB database
module.exports = mongoose.model("Order", orderSchema);
