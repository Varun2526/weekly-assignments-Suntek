# 📕 Week 3 — Backend & API Development

This folder contains assignments focused on backend development, including building a complete REST API with Express, defining Mongoose data models, and setting up JWT authentication middleware for a product management system.

---

## 📁 Folder Structure

```
week3-assignments/
├── server.js                 # Entry point: Express app setup and MongoDB connection
├── package.json              # Project dependencies and npm scripts
├── .env.example              # Environment variables template
├── routes/
│   └── ProductAPI.js         # REST API routes for product CRUD operations
├── models/
│   └── ProductModel.js       # Mongoose data model schema for products
└── middleware/
    └── verifyToken.js        # JWT verification middleware for protected routes
```

---

## 📝 Features & Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/products` | Public | Create a new product |
| `GET` | `/api/products` | Protected | Read all products |
| `GET` | `/api/products/:id` | Protected | Read a single product by ID |
| `PUT` | `/api/products/:id` | Protected | Update a product by ID |
| `DELETE` | `/api/products/:id` | Protected | Delete a product by ID |

---

## ▶️ How to Run

1. **Install Dependencies**
   ```bash
   cd week3-assignments
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. **Start the Server**
   ```bash
   # Run standard
   npm start
   
   # Or run with nodemon for development
   npm run dev
   ```
   > **Note:** Ensure MongoDB is running locally on `mongodb://localhost:27017` or update the `MONGO_URI` in your `.env` file.

---

## 🎯 Learning Outcomes

- Design and implement RESTful API endpoints
- Define data models/schemas for database collections
- Perform CRUD operations (Create, Read, Update, Delete)
- Implement JWT authentication and protect routes using middleware
- Understand the Model–Route–Controller separation pattern in backend applications
- Work with Node.js, Express, and Mongoose for robust server-side development
