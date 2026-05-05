/**
 * @file AuthorAPI.js
 * @description Author-specific API routes — article CRUD operations.
 *              All routes are protected and require AUTHOR role.
 * @requires express, UserModel, ArticleModel, verifyToken
 */

import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
export const authorApp = exp.Router();

// ==========================================
// POST /article — Publish a new article
// Protected: AUTHOR role only
// Verifies that the author in the article matches the logged-in user
// ==========================================
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  const articleObj = req.body;
  // Get the decoded user info from the JWT (set by verifyToken middleware)
  let user = req.user;

  // Verify the author exists in the database
  let author = await UserModel.findById(articleObj.author);

  // Cross-check: ensure the logged-in user is the same as the article's author
  if (author.email != user.email) {
    return res.status(403).json({ message: "You are not authorized" });
  }
  if (!author) {
    return res.status(404).json({ message: "Invalid author" });
  }

  // Create and save the new article document
  const articleDoc = new ArticleModel(articleObj);
  await articleDoc.save();

  res.status(201).json({ message: "Article published successfully" });
});

// ==========================================
// GET /articles — Read the author's own articles
// Protected: AUTHOR role only
// Filters articles by the author's ID from the JWT
// ==========================================
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
  // Extract author ID from the decoded JWT token
  const authorIdOfToken = req.user?.id;

  // Find all articles written by this specific author
  const articlesList = await ArticleModel.find({ author: authorIdOfToken });

  res.status(200).json({ message: "articles", payload: articlesList });
});

// ==========================================
// PUT /articles — Edit an existing article
// Protected: AUTHOR role only
// Only allows editing if the article belongs to the logged-in author
// ==========================================
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
  const authorIdOfToken = req.user?.id;
  const { articleId, title, category, content } = req.body;

  // findOneAndUpdate with both articleId AND author ensures ownership
  const modifiedArticle = await ArticleModel.findOneAndUpdate(
    { _id: articleId, author: authorIdOfToken },
    { $set: { title, category, content } },
    { new: true }, // Return the updated document instead of the old one
  );

  // If no match found, either the article doesn't exist or the author doesn't own it
  if (!modifiedArticle) {
    return res.status(403).json({ message: "Not authorized to edit article" });
  }

  res.status(200).json({ message: "Article modified", payload: modifiedArticle });
});

// ==========================================
// PATCH /articles — Soft delete/restore an article
// Protected: AUTHOR role only
// Toggles the isArcticleActive flag instead of permanently deleting
// ==========================================
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
  const authorIdOfToken = req.user?.id;
  const { articleId, isArcticleActive } = req.body;

  // Find the article and verify ownership
  const articleOfDB = await ArticleModel.findOne({ _id: articleId, author: authorIdOfToken });

  // Check if the article is already in the requested state
  if (isArcticleActive === articleOfDB.isArcticleActive) {
    return res.status(200).json({ message: "Article already in the same state" });
  }

  // Toggle the active status and save
  articleOfDB.isArcticleActive = isArcticleActive;
  await articleOfDB.save();

  res.status(200).json({ message: "Article modified", payload: articleOfDB });
});
