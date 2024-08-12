// Import the Express library, which is a web framework for Node.js
const express = require("express");

// router object is used to define routes for a specific part of the application
const router = express.Router();

// CartController manage cart-related operations
//(e.g. adding items to the cart, removing items, etc.)
const cartController = require("../controllers/cartController");

// Get - Get carts list
router.get("/getCartsList", cartController.getCartsList);

// Post - Create a new cart
router.post("/createCart", cartController.createCart);

// Get - Get a cart by cart ID
router.get("/getCartByCartId/:Id", cartController.getCartByCartId);

// Put - Update a cart by cart ID
router.put("/updateCartByCartId/:Id", cartController.updateCartByCartId);

// Delete - Delete a cart by cart ID
router.delete("/deleteCartByCartId/:Id", cartController.deleteCartByCartId);

router.get("/getCartByUserId/:Id", cartController.getCartByUserId);

module.exports = router;
