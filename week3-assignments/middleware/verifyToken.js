import jwt from 'jsonwebtoken';

/**
 * Middleware to verify JWT token from the Authorization header.
 * Expects header format: "Bearer <token>"
 */
export const verifyToken = (req, res, next) => {
    // Get the authorization header
    const authHeader = req.headers.authorization;

    // Check if header exists and starts with Bearer
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    try {
        // Verify token (using secret from env, or fallback for dev)
        const secret = process.env.JWT_SECRET || "fallback_secret_key";
        const decoded = jwt.verify(token, secret);
        
        // Attach decoded user info to request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Forbidden: Invalid or expired token" });
    }
};
