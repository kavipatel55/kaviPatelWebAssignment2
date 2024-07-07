const express = require("express");
const router = express.Router();
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
