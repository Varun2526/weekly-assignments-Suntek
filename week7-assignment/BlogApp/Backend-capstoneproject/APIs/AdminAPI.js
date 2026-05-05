/**
 * @file AdminAPI.js
 * @description Admin-specific API routes — manage users and their account status.
 *              All routes are protected and require ADMIN role.
 * @requires express, UserModel, verifyToken
 */

import exp from 'express';
import { UserModel } from '../models/UserModel.js';
import { verifyToken } from '../middlewares/VerifyToken.js';

export const adminApp = exp.Router();

// ==========================================
// GET /users — Retrieve all users and authors
// Protected: ADMIN role only
// Excludes password field from response for security
// ==========================================
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
    // Find users with role USER or AUTHOR (excludes other ADMINs)
    // .select("-password") removes the password field from results
    const users = await UserModel.find({ role: { $in: ["USER", "AUTHOR"] } }).select("-password");
    res.status(200).json({ message: "Users found", payload: users });
});

// ==========================================
// PUT /users — Activate or deactivate a user/author account
// Protected: ADMIN role only
// Toggles the isuseractive flag on the user document
// ==========================================
adminApp.put("/users", verifyToken("ADMIN"), async (req, res) => {
    const { userId, isActive } = req.body;

    // Find the target user by their MongoDB _id
    const userOfDB = await UserModel.findById(userId);
    if (!userOfDB) {
        return res.status(404).json({ message: "User not found" });
    }

    // Prevent unnecessary database writes if status is already the same
    if (isActive === userOfDB.isuseractive) {
        return res.status(200).json({ message: "User already in the same state" });
    }

    // Update the active status and save
    userOfDB.isuseractive = isActive;
    await userOfDB.save();

    // Remove password before sending the response
    let userObj = userOfDB.toObject();
    delete userObj.password;

    res.status(200).json({ message: "User status updated successfully", payload: userObj });
});