# Week 3 — Node.js & Express REST APIs

Backend development assignments focusing on building REST APIs with Express.js, progressing from in-memory storage to MongoDB with Mongoose.

## 📋 Assignments

| File | Topic | Description |
|------|-------|-------------|
| `day_1_productapi.js` | Express Router | Product CRUD API with in-memory array storage |
| `day_2_ProductAPI.js` | Express + MongoDB | Product CRUD API with Mongoose models and JWT auth middleware |

## 💡 Concepts Covered

- Express.js Router and middleware
- RESTful API design (GET, POST, PUT, DELETE)
- Request parameters (`req.params`, `req.body`)
- In-memory data storage → MongoDB/Mongoose persistence
- Mongoose Models and CRUD operations (`find`, `findOne`, `findOneAndUpdate`, `findOneAndDelete`)
- JWT token verification middleware
- HTTP status codes (200, 201, 404)
- ES6 module imports/exports

## 🔌 API Endpoints

### Day 1 — In-Memory Product API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| POST | `/products` | Create a new product |
| GET | `/products/:brand` | Get product by brand |
| PUT | `/products` | Update a product |
| DELETE | `/products/:id` | Delete a product by ID |

### Day 2 — MongoDB Product API (with Auth)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/products` | ❌ | Create a new product |
| GET | `/products` | ✅ | Get all products |
| GET | `/products/:id` | ✅ | Get product by ID |
| PUT | `/products/:id` | ✅ | Update product by ID |
| DELETE | `/products/:id` | ✅ | Delete product by ID |

## ▶️ How to Run

```bash
# Install dependencies
npm install

# Start the server
node server.js
```

> **Note**: Day 2 requires a MongoDB connection and JWT configuration.
