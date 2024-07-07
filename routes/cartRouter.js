const express = require("express");
const router = express.Router();
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

module.exports = router;
