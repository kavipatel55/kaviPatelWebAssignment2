const Cart = require("../models/cart");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Get all carts list
exports.getCartsList = async (req, res) => {
  try {
    const cartList = await Cart.find();
    if (cartList.length === 0) {
      res.json({ message: "Cart is empty" });
    } else {
      res.status(200).json({
        cart: cartList,
        message: "Cart list fetched successfully",
      });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new cart
exports.createCart = async (req, res) => {
  try {
    res.status(201).json({
      cart: await Cart.create(req.body),
      message: "Cart created successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Get a cart by ID
exports.getCartByCartId = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.Id);
    if (cart == null) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json({
      cart: cart,
      message: "Cart found successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Update a cart by ID
exports.updateCartByCartId = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.Id, req.body, {
      new: true,
    });
    if (updatedCart == null) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json({
      cart: updatedCart,
      message: "Cart updated successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Delete a cart by ID
exports.deleteCartByCartId = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.Id);
    if (deletedCart == null) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json({ message: "Deleted successfully", deletedCart: deletedCart });
  } catch (error) {
    handleError(res, error);
  }
};

// Get cart by user ID
exports.getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.Id }); // Find cart by user ID
    if (cart == null) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }
    res
      .status(200)
      .json({ message: "Cart Added successfully", cart: cart });
  } catch (error) {
    handleError(res, error);
  }
};
