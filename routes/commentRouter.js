// Import the Express library, which is a web framework for Node.js
const express = require("express");

// router object is used to define routes for a specific part of the application
const router = express.Router();

// CommentController manage comment-related operations
const commentController = require("../controllers/commentController");

// Get all comments list
router.get("/getCommentList", commentController.getCommentList);

// Get a comment detail by ID
router.get(
  "/getCommentDetailById/:commentId",
  commentController.getCommentDetailById
);

// Create a new comment
router.post("/createComment", commentController.createComment);

// Update a comment details by ID
router.put(
  "/updateCommentDetailById/:commentId",
  commentController.updateCommentDetailById
);

// Delete a comment by ID
router.delete(
  "/deleteCommentById/:commentId",
  commentController.deleteCommentById
);

module.exports = router;
