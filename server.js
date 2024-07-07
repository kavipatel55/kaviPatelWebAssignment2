// Import required modules
const expressInstance = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { error } = require("console");

// Create an instance of Express
const app = expressInstance();

// Middleware to parse JSON bodies of requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://kp:nBSiSLgCx74KuGdB@cluster0.ktw3lwa.mongodb.net/Assignment2?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection failed to MongoDB", err);
    process.exit(1);
  });

app.use("/api/users", require("./routes/usersRouter"));
app.use("/api/products", require("./routes/productsRouter"));

// Start the server
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});
