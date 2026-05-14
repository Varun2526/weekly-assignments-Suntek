import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ProductApp } from './routes/ProductAPI.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Register API routes
app.use('/api', ProductApp);

// Database connection and server startup
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/productdb';

mongoose.connect(DB_URL)
    .then(() => {
        console.log('✅ Connected to MongoDB successfully');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    });

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});
