  // controllers/userController.js
  const User = require("../models/User");
  const bcrypt = require("bcryptjs");
  const crypto = require("crypto");
  // Helper function to handle errors
  const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  };

  exports.registerUser = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      const existU = await User.findOne({ email });
      if (existU) {
        return res.status(400).json({ error: "User already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User created successfully", user: user });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  };

  exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "No user found" });
      }
      const passmatch = await bcrypt.compare(password, user.password);
      if (!passmatch) {
        return res.status(401).json({ error: "Wrong Password!" });
      }
      const authToken = crypto.randomBytes(16).toString("hex");
      user.authToken = authToken;

      res.cookie("authToken", authToken, { httpOnly: true, maxAge: 3600000 });
      res
        .status(200)
        .json({ message: "Login success", authToken: user.authToken, user_id: email});
    } catch (e) {
      console.log("server error");
    }
  };

  // exports.logout = async (req, res) => {
  //   const authToken = req.cookies.authToken;

    
  //   if (authToken) {
  //     const user = await User.findOne({ authToken });
  //     if (user) {
  //       user.authToken = "";
  //       await user.save();
  //     }
  //     res.clearCookie("authToken");
  //   }
  // };
  exports.logout = (req, res) => {
    console.log(req.cookies); // Log cookies for debugging
    const authToken = req.cookies.authToken;
  
    if (!authToken) {
      return res.status(400).json({ error: 'No authentication token found' });
    }
  
    res.clearCookie('authToken');
    return res.status(200).json({ message: 'Logout successful' });
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
