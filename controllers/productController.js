const Product = require("../models/product");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Get all products list
exports.getProductsList = async (req, res) => {
  try {
    console.log("Entering getProductsList");
    const productList = await Product.find();
    console.log("Product list retrieved:", productList);
    if (productList.length === 0) {
      res.json({ message: "Proudct is empty" });
    } else {
      res.status(200).json({
        product: productList,
        message: "Product list fetched successfully",
      });
    }
    console.log("Response sent successfully");
  } catch (error) {
    console.error("Error in getProductsList:", error);
    handleError(res, error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { name, description, pricing } = req.body;

    // Check if an image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Create a new product instance
    const product = new Product({
      name,   
      description,
      image: `http://localhost:3131/uploads/${req.file.filename}`,
      pricing,
    });

    await product.save();

    // Send a successful response with the new product
    res.status(201).json({ product, message: 'Product created successfully' });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error creating product:", error);
    res.status(500).json({ message: error.message });
  }
};



// Update product
exports.updateProduct = async (req, res) => {
  const { Id } = req.params;
  const updates = req.body;
  try {
    const product = await Product.findByIdAndUpdate(Id, updates, { new: true });
    if (product == null) {
      return res.status(404).json({ error: "Product not availabel" });
    }
    res.json({ product: product, message: "Product updated successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

//Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const { Id } = req.params;

    let product = await Product.findByIdAndDelete(Id);
    if (product == null) {
      return res.status(404).json({ error: "Product not exists" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
