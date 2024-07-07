const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Get - Get all orders list
router.get("/getOrdersList", orderController.getOrdersList);

// Get - Get an order detail by ID
router.get("/getOrderDetailById/:orderId", orderController.getOrderDetailById);

// Post - Create a new order
router.post("/createOrder", orderController.createOrder);

// Put - Update an order detail by ID
router.put(
  "/updateOrderDetailById/:orderId",
  orderController.updateOrderDetailById
);

// Delete - Delete an order by ID
router.delete("/deleteOrderById/:orderId", orderController.deleteOrderById);

module.exports = router;
