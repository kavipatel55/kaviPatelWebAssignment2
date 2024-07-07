const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Get all users list
router.get("/getUserList", userController.getAllUsers);

// Get a user by particular ID
router.get("/getUserById/:Id", userController.getUserById);

// Create a new user
router.post("/createUser", userController.createUser);

// Update a user by ID
router.put("/updateUser/:Id", userController.updateUser);

// Delete a user by ID
router.delete("/deleteUser/:Id", userController.deleteUser);

module.exports = router;
