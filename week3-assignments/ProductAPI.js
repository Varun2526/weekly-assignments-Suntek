/**
 * @file day_2_ProductAPI.js
 * @description Product REST API with MongoDB persistence and JWT authentication.
 *              Upgrades the in-memory API to use Mongoose models and auth middleware.
 * @concepts Mongoose CRUD, async/await, JWT middleware, Express Router, HTTP status codes
 */

import exp from 'express';
import { ProductModel } from '../models/ProductModel.js';
import { verifyToken } from '../middleware/verifyToken.js';

export const ProductApp = exp.Router();

// ==========================================
// POST /products — Create a new product
// No auth required — public endpoint
// Saves product to MongoDB via Mongoose model
// ==========================================
ProductApp.post('/products', async (req, res) => {
    const newProduct = req.body;
    // Create a Mongoose document and save to the database
    const newProductDocument = new ProductModel(newProduct);
    const result = await newProductDocument.save();
    console.log("Created product:", result);
    res.status(201).json({ message: "product created" });
});

// ==========================================
// GET /products — Read all products
// Protected: requires valid JWT token
// ==========================================
ProductApp.get('/products', verifyToken, async (req, res) => {
    let productList = await ProductModel.find(); // Fetch all documents from collection
    res.status(200).json({ message: "products", productlist: productList });
});

// ==========================================
// GET /products/:id — Read a single product by productId
// Protected: requires valid JWT token
// ==========================================
ProductApp.get('/products/:id', verifyToken, async (req, res) => {
    // findOne() returns the first matching document (or null)
    let product = await ProductModel.findOne({ productId: Number(req.params.id) });
    res.status(200).json({ message: "product found", productlistbyid: product });
});

// ==========================================
// PUT /products/:id — Update a product by productId
// Protected: requires valid JWT token
// Uses $set to update only the provided fields
// ==========================================
ProductApp.put('/products/:id', verifyToken, async (req, res) => {
    const modifiedProduct = req.body;
    const pid = req.params.id;
    // findOneAndUpdate with {new: true} returns the updated document
    // runValidators ensures schema validation runs on updates too
    const updatedProduct = await ProductModel.findOneAndUpdate(
        { productId: Number(pid) },
        { $set: { ...modifiedProduct } },
        { new: true, runValidators: true }
    );

    if (updatedProduct == null)
        return res.status(404).json({ message: "product not found" });

    res.status(200).json({ message: "product updated", updatedProduct });
});

// ==========================================
// DELETE /products/:id — Delete a product by productId
// Protected: requires valid JWT token
// ==========================================
ProductApp.delete('/products/:id', verifyToken, async (req, res) => {
    const deletedProduct = await ProductModel.findOneAndDelete({
        productId: Number(req.params.id)
    });

    if (!deletedProduct)
        return res.status(404).json({ message: "product not found" });

    res.status(200).json({ message: "product deleted", payload: deletedProduct });
});
