/**
 * @file UserAPI.js
 * @description User-specific API routes — read articles and add comments.
 *              All routes are protected and require USER role.
 * @requires express, verifyToken, ArticleModel
 */

import exp from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";
export const userApp = exp.Router();

// ==========================================
// GET /articles — Read all active articles from all authors
// Protected: USER role only
// Only returns articles where isArcticleActive is true
// ==========================================
userApp.get("/articles", verifyToken("USER"), async (req, res) => {
  // Fetch only active (non-deleted) articles
  const articlesList = await ArticleModel.find({ isArcticleActive: true });
  res.status(200).json({ message: "articles", payload: articlesList });
});

// ==========================================
// PUT /articles — Add a comment to an article
// Protected: USER role only
// Pushes a new comment object into the article's comments array
// ==========================================
userApp.put("/articles", verifyToken("USER"), async (req, res) => {
  const { articleId, comment } = req.body;

  // Find the active article and populate user info in existing comments
  const articleDocument = await ArticleModel
                          .findOne({ _id: articleId, isArcticleActive: true })
                          .populate("comments.user");

  console.log(articleDocument);

  if (!articleDocument) {
    return res.status(404).json({ message: "Article not found" });
  }

  // Get the user's ID from the decoded JWT token
  const userId = req.user?.id;

  // Add the new comment with user reference to the comments array
  articleDocument.comments.push({ user: userId, comment: comment });

  // Save the updated document (triggers Mongoose middleware if any)
  await articleDocument.save();

  res.status(200).json({ message: "Comment added successfully", payload: articleDocument });
});
