// Import the Express library, which is a web framework for Node.js
const express = require("express");

// router object is used to define routes for a specific part of the application
const router = express.Router();

// ProductController manage product-related operations
const productController = require("../controllers/productController");

// Post - Create new product
router.post("/createProduct", productController.createProduct);

// GET - products list
router.get("/getProductsList", productController.getProductsList);

// Put - Update product by ID
router.put("/updateProduct/:Id", productController.updateProduct);

// Delete - DELETE product by ID
router.delete("/deleteProduct/:Id", productController.deleteProduct);

module.exports = router;
