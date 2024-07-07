const Order = require("../models/order");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Helper function to handle not found errors
const handleNotFound = (res, message = "Order not found") => {
  res.status(404).json({ error: message });
};

// Get all orders list
exports.getOrdersList = async (req, res) => {
  try {
    const ordersList = await Order.find();
    if (ordersList.length === 0) {
      return res.json({ message: "Order list is empty" });
    } else {
      res.status(200).json({
        order: ordersList,
        message: "Order list fetched successfully",
      });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// Get an order detail by ID
exports.getOrderDetailById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order == null) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({
      order: order,
      message: "Order detail fetched successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      order: newOrder,
      message: "Order created successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Update an order detail by ID
exports.updateOrderDetailById = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      { new: true }
    );
    if (updatedOrder == null) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({
      order: updatedOrder,
      message: "Order detail updated successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
