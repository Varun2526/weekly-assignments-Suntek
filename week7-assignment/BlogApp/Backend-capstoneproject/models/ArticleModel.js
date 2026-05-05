/**
 * @file ArticleModel.js
 * @description Mongoose schemas and model for Article and Comment documents.
 *              Articles belong to an author (User) and contain an array of comments.
 *              Supports soft deletion via isArcticleActive flag.
 * @requires mongoose
 */

import { Schema, model, Types } from "mongoose";

/**
 * Comment Sub-Schema
 * Embedded within each article's comments array.
 * References the User model for the commenter's identity.
 */
const commentSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",                        // References the User model for population
    required: [true, "User ID required"],
  },
  comment: {
    type: String,
    required: [true, "Enter a comment"],
  },
});

/**
 * Article Schema Definition
 * - author: ObjectId reference to the User who wrote the article
 * - title: Article headline (required)
 * - category: Article category/topic (required)
 * - content: Full article body text (required)
 * - comments: Array of embedded comment sub-documents
 * - isArcticleActive: Soft delete flag (true = visible, false = hidden)
 */
const articleSchema = new Schema(
  {
    author: {
      type: Types.ObjectId,
      ref: "user",                        // Enables .populate("author") for author details
      required: [true, "Author ID is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    comments: [{ type: commentSchema, default: [] }],  // Embedded array of comments
    isArcticleActive: {
      type: Boolean,
      default: true,  // Articles are active (visible) by default
    },
  },
  {
    versionKey: false,   // Removes __v field from documents
    timestamps: true,    // Adds createdAt and updatedAt automatically
    strict: "throw",     // Throws error for unknown fields
  },
);

// Create and export the Mongoose model (collection name: "articles")
export const ArticleModel = model("article", articleSchema);
