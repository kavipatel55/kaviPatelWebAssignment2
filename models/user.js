//Import Mongoose library
const mongoose = require("mongoose");

// Define a new schema for the User collection using the Mongoose schema constructor
const userSchema = new mongoose.Schema({
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true},  
  purchaseHistory: Array,
  shippingAddress: String,
});

// This creates a new Mongoose model called 'User'
//that maps to the 'users' collection in the MongoDB database
module.exports = mongoose.model("User", userSchema);
