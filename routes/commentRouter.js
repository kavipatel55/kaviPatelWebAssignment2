const express = require("express");
const router = express.Router();
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
