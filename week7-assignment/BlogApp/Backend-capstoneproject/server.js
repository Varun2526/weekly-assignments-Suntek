/**
 * @file server.js
 * @description Express application entry point for the BlogApp backend.
 *              Sets up middleware, routes, database connection, and error handling.
 * @requires express, dotenv, mongoose, cookie-parser, cors
 */

import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

// Load environment variables from .env file
config();

// Initialize Express application
const app = exp();

// --- Middleware Setup ---

// Enable CORS for frontend origin with credentials (cookies)
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

// Parse cookies from incoming requests (needed for JWT in httpOnly cookies)
app.use(cookieParser());

// Parse JSON request bodies (replaces body-parser)
app.use(exp.json());

// --- Route Registration ---
// Each API module handles its own set of endpoints
app.use("/user-api", userApp);       // User-specific routes (read articles, comment)
app.use("/author-api", authorApp);   // Author routes (write, edit, delete articles)
app.use("/admin-api", adminApp);     // Admin routes (manage users)
app.use("/auth", commonApp);         // Authentication (register, login, logout)

// --- Database Connection ---
/**
 * Connect to MongoDB and start the HTTP server.
 * Server only starts after successful DB connection.
 */
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server listening on ${port}..`));
  } catch (err) {
    console.log("err in db connect", err);
  }
};

connectDB();

// --- 404 Handler ---
// Catches requests to undefined routes
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

// --- Global Error Handler ---
// Express error-handling middleware (4 parameters required)
app.use((err, req, res, next) => {
  console.log("error is ", err);
  console.log("Full error:", JSON.stringify(err, null, 2));

  // Mongoose validation error (e.g., required field missing)
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }

  // Mongoose cast error (e.g., invalid ObjectId format)
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }

  // MongoDB duplicate key error (code 11000)
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  // Catch-all for unhandled server errors
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});
