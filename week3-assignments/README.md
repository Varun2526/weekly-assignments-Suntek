# 📕 Week 3 — Backend & API Development

This folder contains assignments focused on backend development, including building REST API endpoints and defining data models for a product management system.

---

## 📁 Folder Structure

```
week-3/
├── productAPI.js      # REST API routes for product CRUD operations
└── productmodel.js    # Mongoose/data model schema for products
```

---

## 📝 Assignment Details

| File | Description |
|------|-------------|
| `productAPI.js` | Defines RESTful API endpoints (GET, POST, PUT, DELETE) for managing products |
| `productmodel.js` | Defines the product data model/schema with fields like name, price, description, etc. |

---

## ▶️ How to Run

```bash
# Navigate to the week-3 directory
cd assignments/week-3

# Run the API server (may require additional setup like MongoDB)
node productAPI.js
```

> **Note:** These files may require Node.js dependencies (e.g., Express, Mongoose). Make sure to install them via `npm install` if a `package.json` is present, or install individually:
> ```bash
> npm install express mongoose
> ```

---

## 🎯 Learning Outcomes

- Design and implement RESTful API endpoints
- Define data models/schemas for database collections
- Perform CRUD operations (Create, Read, Update, Delete)
- Understand the Model–Route separation pattern in backend applications
- Work with Node.js and Express for server-side development
