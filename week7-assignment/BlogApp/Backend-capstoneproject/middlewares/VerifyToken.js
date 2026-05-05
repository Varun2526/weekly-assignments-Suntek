/**
 * @file VerifyToken.js
 * @description JWT verification middleware with role-based access control.
 *              Returns a middleware function that checks for a valid token
 *              in cookies and verifies the user's role against allowed roles.
 * @requires jsonwebtoken, dotenv
 */

import jwt from "jsonwebtoken";
import { config } from "dotenv";
const { verify } = jwt;
config();

/**
 * Creates a middleware that verifies JWT tokens and enforces role-based access.
 * Uses a closure pattern — accepts roles, returns the actual middleware function.
 *
 * @param {...string} allowedRoles - Roles permitted to access the route (e.g., "USER", "AUTHOR", "ADMIN")
 * @returns {Function} Express middleware function
 *
 * @example
 * // Allow only AUTHORS
 * router.get("/articles", verifyToken("AUTHOR"), handler);
 *
 * // Allow multiple roles
 * router.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), handler);
 */
export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // Step 1: Extract the JWT from the httpOnly cookie
      const token = req.cookies?.token;

      // Step 2: Check if a token exists
      if (!token) {
        return res.status(401).json({ message: "Please login first" });
      }

      // Step 3: Verify and decode the token using the secret key
      let decodedToken = verify(token, process.env.SECRET_KEY);

      // Step 4: Check if the user's role is in the list of allowed roles
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "You are not authorized" });
      }

      // Step 5: Attach decoded user info to the request for downstream use
      req.user = decodedToken;
      next(); // Pass control to the next middleware/route handler
    } catch (err) {
      // Token is expired or malformed
      res.status(401).json({ message: "Invalid token" });
    }
  };
};
