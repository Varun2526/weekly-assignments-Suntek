import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

// Initialize Express application
const app = exp();

// --- Middleware ---

// Enable CORS for the React frontend (Vite dev server on port 5173)
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

// Parse JSON request bodies
app.use(exp.json());

// Register employee API routes under /emp-api prefix
app.use("/emp-api", empRoute);

// --- Database Connection ---
/**
 * Connect to local MongoDB and start the server.
 * Server only starts after a successful DB connection.
 */
const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/empdb");
    console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

// --- Global Error Handler ---
// Catches errors thrown by async route handlers
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
