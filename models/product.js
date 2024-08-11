//Import Mongoose library
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  pricing: String,
});

module.exports = mongoose.model("Product", productSchema);
