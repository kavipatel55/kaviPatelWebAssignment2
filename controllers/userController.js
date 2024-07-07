// controllers/userController.js
const User = require("../models/User");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const userList = await User.find();
    if (userList.length === 0) {
      res.json({ message: "User is empty" });
    } else {
      res.status(200).json({
        user: userList,
        message: "User list fetched successfully",
      });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const savedUser = await User.create(req.body);

    res.status(201).json({
      user: savedUser,
      message: "User created successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Get a user detail by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.Id);
    if (user == null) {
      return res.status(404).json({ error: "Can not find User" });
    }
    res.json({
      user: user,
      message: "User detail fetched successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Update a user detail by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.Id, req.body, {
      new: true,
    });
    if (updatedUser == null) {
      return res.status(404).json({ error: "Can not find User" });
    }
    res.json({
      user: updatedUser,
      message: "User detail updated successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    if ((await User.findByIdAndDelete(req.params.Id)) == null) {
      return res.status(404).json({ error: "Can not find User" });
    }
    res.json({ message: "User deleted" });
  } catch (error) {
    handleError(res, error);
  }
};
