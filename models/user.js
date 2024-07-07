//Import Mongoose library
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  purchaseHistory: Array,
  shippingAddress: String,
});

module.exports = mongoose.model("User", userSchema);
