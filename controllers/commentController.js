const Comment = require("../models/comment");

// Helper function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

// Helper function to handle not found errors
const handleNotFound = (res, message = "Comment not found") => {
  res.status(404).json({ error: message });
};

// Get all comments
exports.getCommentList = async (req, res) => {
  try {
    const commentsList = await Comment.find();
    if (commentsList.length === 0) {
      res.json({ message: "Comment list is empty" });
    } else {
      res.status(200).json({
        comment: commentsList,
        message: "Comment list fetched successfully",
      });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// Get a comment by ID
exports.getCommentDetailById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (comment == null) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json({
      comment: comment,
      message: "Comment details fetched successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Create a comment
exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
      comment: newComment,
      message: "Comment created successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Update a comment by ID
exports.updateCommentDetailById = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      req.body,
      { new: true }
    );
    if (updatedComment == null) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({
      comment: updatedComment,
      message: "Comment updated successfully",
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Delete a comment by ID
exports.deleteCommentById = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(
      req.params.commentId
    );
    if (deletedComment == null) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
