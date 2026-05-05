# Week 6 — React Hooks, State Management & MERN CRUD App

Advanced React assignments covering hooks (`useState`, `useEffect`, `useRef`), form handling, API integration, Context API, Zustand state management, and a complete MERN stack employee management application.

## 📋 Assignments

### 28-March-2026 — React Hooks & Forms

| Component | Topic | Description |
|-----------|-------|-------------|
| `Counter.jsx` | `useState` | Counter with increment/decrement |
| `FormDemo.jsx` | Form Handling | Controlled form inputs with state |
| `UserForm.jsx` | Forms | User registration form |
| `APIDemo.jsx` | `useEffect` | Fetching data from external API |
| `TestRefTypes.jsx` | `useRef` | DOM references and uncontrolled inputs |
| `NavBar.jsx` | Navigation | Reusable navigation component |

### 28-March-2026-(2) — Lifting State Up

| Component | Topic | Description |
|-----------|-------|-------------|
| `Users.jsx` | State Management | User list with shared state |
| `Usercount.jsx` | Props | Display user count from parent state |

### 31-March-2026 — Context API

| Component | Topic | Description |
|-----------|-------|-------------|
| `ContextProvider.jsx` | Context API | Global state provider |
| `home.jsx` | useContext | Consuming context data |

### mern-app-emps — Full MERN CRUD Application

A complete employee management system with:
- **Backend**: Express.js REST API with MongoDB
- **Frontend**: React with React Router, Zustand state management
- Full CRUD operations (Create, Read, Update, Delete)

| Component | Description |
|-----------|-------------|
| `backend/server.js` | Express server with MongoDB connection |
| `backend/API/empApp.js` | Employee REST API routes |
| `backend/models/EmpModel.js` | Mongoose Employee schema |
| `frontend/src/components/Home.jsx` | Landing page |
| `frontend/src/components/ListOfEmps.jsx` | Employee list display |
| `frontend/src/components/CreateEmp.jsx` | Create employee form |
| `frontend/src/components/EditEmployee.jsx` | Edit employee form |
| `frontend/src/components/Employee.jsx` | Single employee card |
| `frontend/src/store/useCounterStore.js` | Zustand store |

## 💡 Concepts Covered

- React Hooks (`useState`, `useEffect`, `useRef`, `useContext`)
- Controlled vs uncontrolled components
- Form handling and validation
- API integration with `fetch` and `axios`
- React Router (`createBrowserRouter`, `Outlet`)
- State management: Context API vs Zustand
- MERN stack architecture
- Express middleware and error handling
- Mongoose schemas and CRUD operations
- CORS configuration

## ▶️ How to Run

```bash
# React hook demos
cd 28-march-2026
npm install && npm run dev

# MERN Employee App
# Terminal 1 — Backend
cd mern-app-emps/backend
npm install && node server.js

# Terminal 2 — Frontend
cd mern-app-emps/frontend
npm install && npm run dev
```

> **Note**: The MERN app requires MongoDB running locally on `mongodb://localhost:27017/empdb`.
