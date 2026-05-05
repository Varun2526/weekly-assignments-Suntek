/**
 * @file day_1_productapi.js
 * @description Product REST API with in-memory storage. Demonstrates Express
 *              Router with full CRUD operations using array as data store.
 * @concepts Express Router, REST API, req.body, req.params, HTTP methods, splice()
 */

import exp from 'express';

// Create a modular router for product-related endpoints
const productApp = exp.Router();
export { productApp };

// In-memory product storage (resets on server restart)
let products = [];

// ==========================================
// GET /products — Retrieve all products
// ==========================================
productApp.get('/products', (req, res) => {
    res.json({ message: "all products", cart: products });
});

// ==========================================
// POST /products — Create a new product
// Expects: { productId, name, brand, price }
// ==========================================
productApp.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json({ message: "product created" });
});

// ==========================================
// GET /products/:brand — Find product by brand name
// Uses req.params to extract the brand from the URL
// ==========================================
productApp.get('/products/:brand', (req, res) => {
    let brand = req.params.brand;
    // find() returns the first matching product object (or undefined)
    let foundProduct = products.find(product => product.brand === brand);

    if (!foundProduct) {
        return res.json({ message: "brand not found" });
    }
    res.json({ message: "product by brand", cart: foundProduct });
});

// ==========================================
// PUT /products — Update an existing product
// Matches by productId from the request body
// ==========================================
productApp.put('/products', (req, res) => {
    let modifiedProduct = req.body;
    // Find the index of the product to update
    let index = products.findIndex(product => product.productId === modifiedProduct.productId);

    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    // Replace the product at the found index using splice
    products.splice(index, 1, modifiedProduct);
    res.json({ message: "product modified" });
});

// ==========================================
// DELETE /products/:id — Remove a product by its ID
// Converts URL param to number for comparison
// ==========================================
productApp.delete('/products/:id', (req, res) => {
    let productId = Number(req.params.id); // params are always strings, convert to number
    let index = products.findIndex(product => product.productId === productId);

    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    products.splice(index, 1); // Remove 1 element at the found index
    res.json({ message: "product removed" });
});