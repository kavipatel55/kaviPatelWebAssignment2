const Product = require("../models/product");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Get all products list
exports.getProductsList = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (error) {
    handleError(res, error);
  }
};

// Create new product
exports.createProduct = async (req, res) => {
  try {
    const { description, image, pricing, shippingCost } = req.body;
    const product = new Product({ description, image, pricing, shippingCost });
    await product.save();
    res
      .status(201)
      .json({ product: product, message: "Product created successfully" });
  } catch (error) {
    handleError(res, error);
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
