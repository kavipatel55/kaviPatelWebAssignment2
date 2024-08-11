// Import required modules
const expressInstance = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

// Create an instance of Express
const app = expressInstance();

// Middleware to parse JSON bodies of requests
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', expressInstance.static(path.join(__dirname, 'uploads')));

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
app.use("/api/carts", require("./routes/cartRouter"));
app.use("/api/comments", require("./routes/commentRouter"));
app.use("/api/orders", require("./routes/orderRouter"));

// Start the server
const PORT = 3131;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
