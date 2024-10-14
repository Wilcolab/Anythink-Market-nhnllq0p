/**
 * @file /workspaces/Anythink-Market-nhnllq0p/backend/routes/api/comments.js
 * @description This file contains the routes for handling comments in the Anythink Market application.
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments
 * @summary Retrieves all comments.
 * @route GET /api/comments
 * @returns {Object} 200 - An array of comments
 * @returns {Error}  default - Unexpected error
 */
router.get("/", async (req, res) => {
    const comments = await Comment.find();
    res.json({ comments });
});

/**
 * POST /api/comments
 * @summary Creates a new comment.
 * @route POST /api/comments
 * @param {Object} req.body.comment - The comment object to be created
 * @returns {Object} 200 - The created comment
 * @returns {Error}  default - Unexpected error
 */
router.post("/", async (req, res) => {
    const comment = new Comment(req.body.comment);
    await comment.save();
    res.json({ comment });
});

/**
 * DELETE /api/comments/:id
 * @summary Deletes a comment by ID.
 * @route DELETE /api/comments/{id}
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {Object} 200 - A message indicating the comment was deleted
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:id", async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
});


