/**
 * @file UserModel.js
 * @description Mongoose schema and model for User documents.
 *              Supports three roles: USER, AUTHOR, ADMIN with profile images
 *              and account activation status.
 * @requires mongoose
 */

import { Schema, model } from "mongoose";

/**
 * User Schema Definition
 * - firstName: Required display name
 * - lastName: Optional last name
 * - email: Required, must be unique (enforced at DB level)
 * - password: Required, stored as bcrypt hash
 * - role: Enum of USER, AUTHOR, or ADMIN
 * - profileImageUrl: Cloudinary CDN URL for profile picture
 * - isuseractive: Admin can toggle this to block/unblock users
 */
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: [true, "Email already existed"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    role: {
      type: String,
      enum: ["USER", "AUTHOR", "ADMIN"],
      required: [true, "Invalid role"],
    },
    profileImageUrl: {
      type: String,
    },
    isuseractive: {
        type: Boolean,
        default: true  // New accounts are active by default
    }
  },
  {
    timestamps: true,    // Adds createdAt and updatedAt fields automatically
    versionKey: false,   // Removes __v field from documents
    strict: "throw",     // Throws error if unknown fields are provided
  },
);

// Create and export the Mongoose model (collection name: "users")
export const UserModel = model("user", userSchema);
