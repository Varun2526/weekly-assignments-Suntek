# 🧑‍💼 MERN Employee Management App

A full-stack CRUD application for managing employee records, built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Demonstrates end-to-end data flow from a React frontend through a REST API to a MongoDB database.

## 🚀 Live Demo

**🔗 [https://emp-app-two.vercel.app](https://emp-app-two.vercel.app)**

---

## 🏗️ Architecture

```
mern-app-emps/
├── backend/
│   ├── API/
│   │   └── empApp.js        # Employee REST API routes (CRUD)
│   ├── models/
│   │   └── EmpModel.js      # Mongoose Employee schema
│   └── server.js            # Express server + MongoDB connection
│
└── frontend/
    └── src/
        ├── components/
        │   ├── Home.jsx          # Landing page
        │   ├── Header.jsx        # Navigation bar
        │   ├── ListOfEmps.jsx    # Employee list with delete
        │   ├── CreateEmp.jsx     # Add new employee form
        │   ├── EditEmployee.jsx  # Edit existing employee form
        │   ├── Employee.jsx      # Single employee card component
        │   └── RootLayout.jsx    # App layout wrapper
        ├── store/
        │   └── useCounterStore.js  # Zustand global state store
        └── App.jsx               # React Router configuration
```

---

## ✨ Features

- **Create** — Add new employees with name, email, mobile, designation & company
- **Read** — View all employees in a list
- **Update** — Edit any employee's details
- **Delete** — Remove an employee permanently
- **State Management** — Zustand store for global employee list state
- **Routing** — React Router v7 with nested routes

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/emp-api/employees` | Fetch all employees |
| `POST` | `/emp-api/employees` | Create a new employee |
| `PUT` | `/emp-api/employees/:id` | Update employee by MongoDB `_id` |
| `DELETE` | `/emp-api/employees/:id` | Delete employee by MongoDB `_id` |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, React Router |
| State | Zustand |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| HTTP | Axios |

---

## ▶️ How to Run

### Prerequisites
- Node.js (v18+)
- MongoDB running locally on `mongodb://localhost:27017`

### Backend
```bash
cd backend
npm install
node server.js
# Server starts at http://localhost:4000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# App opens at http://localhost:5173
```

---

## 💡 Concepts Demonstrated

- MERN stack end-to-end data flow
- Mongoose schema design with validation & uniqueness constraints
- Express Router modularization (`/API/empApp.js`)
- React controlled forms and `useEffect` for data fetching
- Zustand for global state management (avoiding prop drilling)
- React Router `createBrowserRouter` with `Outlet` for nested layouts
- CORS configuration for cross-origin frontend ↔ backend communication
- Global Express error handler middleware