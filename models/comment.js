//Import Mongoose library
const mongoose = require("mongoose");

// Define a new schema for the Comment collection using the Mongoose schema constructor
const commentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  images: [String],
  text: String,
});

// This creates a new Mongoose model called 'Comment'
//that maps to the 'comments' collection in the MongoDB database
module.exports = mongoose.model("Comment", commentSchema);
