/**
 * @file CommonAPI.js
 * @description Authentication API routes — handles user registration (with
 *              image upload), login (JWT), logout, auth verification, and
 *              password change for all roles (USER, AUTHOR, ADMIN).
 * @requires express, bcryptjs, jsonwebtoken, multer, cloudinary
 */

import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";
config();

// ==========================================
// POST /users — Register a new user
// Accepts multipart form data with optional profile image
// Flow: validate role → upload image → hash password → save to DB
// ==========================================
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res) => {
  let cloudinaryResult;
  try {
    let allowedRoles = ["USER", "AUTHOR"];
    const newUser = req.body;
    console.log(newUser);
    console.log(req.file);

    // Validate that the role is either USER or AUTHOR (ADMIN is not self-registrable)
    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Upload profile image to Cloudinary if provided
    // Multer stores the file in memory (buffer), which is streamed to Cloudinary
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    // Store the Cloudinary CDN URL in the user object
    newUser.profileImageUrl = cloudinaryResult?.secure_url;

    // Hash the password with bcrypt (12 salt rounds) before storing
    newUser.password = await hash(newUser.password, 12);

    // Create and save the Mongoose document
    const newUserDoc = new UserModel(newUser);
    await newUserDoc.save();

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("err is ", err);
    // If registration fails after image upload, clean up the Cloudinary image
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    next(err);
  }
});

// ==========================================
// POST /login — Authenticate user (all roles)
// Flow: find user → check if blocked → compare password → issue JWT cookie
// ==========================================
commonApp.post("/login", async (req, res) => {
  // Extract credentials from request body
  const { email, password } = req.body;

  // Look up user by email in the database
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // Check if the user's account has been blocked by an admin
  if (user.isuseractive === false) {
    return res.status(403).json({ message: "Your account is blocked by the admin." });
  }

  // Compare the provided password with the stored bcrypt hash
  const isMatched = await compare(password, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // Create a JWT token with user info in the payload (expires in 1 hour)
  const signedToken = sign(
    {
      id: user._id,
      email: email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    },
  );

  // Set the JWT as an httpOnly cookie (not accessible via JavaScript — XSS protection)
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,     // Set to true in production (HTTPS)
    sameSite: "lax",   // CSRF protection
  });

  // Remove password from the response object before sending
  let userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({ message: "login success", payload: userObj });
});

// ==========================================
// GET /logout — Clear authentication cookie
// ==========================================
commonApp.get("/logout", (req, res) => {
  // Clear the token cookie with matching options
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logout success" });
});

// ==========================================
// GET /check-auth — Verify authentication on page refresh
// Returns the decoded user info if the token is still valid
// ==========================================
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});

// ==========================================
// PUT /password — Change password (all roles)
// TODO: Implementation pending
// ==========================================
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
  // Steps to implement:
  // 1. Get current password and new password from req.body
  // 2. Find user by ID from decoded token
  // 3. Compare current password with stored hash
  // 4. Hash new password
  // 5. Update user document with new password hash
  // 6. Save and send response
});
