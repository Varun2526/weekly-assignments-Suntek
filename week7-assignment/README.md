# Week 7 — Capstone Project: BlogApp

A full-stack blog application built with the MERN stack as the capstone project. Features role-based access control (User, Author, Admin), article management, image uploads via Cloudinary, and JWT authentication.

## 🏗️ Architecture

```
BlogApp/
├── Backend-capstoneproject/     # Express.js API server
│   ├── APIs/                    # Route handlers
│   │   ├── CommonAPI.js         # Auth (register, login, logout)
│   │   ├── UserAPI.js           # User-specific routes
│   │   ├── AuthorAPI.js         # Author article management
│   │   └── AdminAPI.js          # Admin panel operations
│   ├── models/                  # Mongoose schemas
│   │   ├── UserModel.js         # User schema (roles, profile image)
│   │   └── ArticleModel.js      # Article schema (author, comments)
│   ├── middlewares/
│   │   └── VerifyToken.js       # JWT verification middleware
│   ├── config/
│   │   ├── cloudinary.js        # Cloudinary configuration
│   │   ├── cloudinaryUpload.js  # Upload helper function
│   │   └── multer.js            # File upload middleware (2MB, JPG/PNG)
│   └── server.js                # App entry point
│
└── frontend/                    # React + Vite SPA
    ├── src/
    │   ├── components/
    │   │   ├── Home.jsx             # Landing page
    │   │   ├── Header.jsx           # Navigation bar
    │   │   ├── Footer.jsx           # Footer component
    │   │   ├── Login.jsx            # Login form
    │   │   ├── Register.jsx         # Registration form
    │   │   ├── Articles.jsx         # Article list
    │   │   ├── ArticleByID.jsx      # Single article view
    │   │   ├── WriteArticles.jsx    # Create new article
    │   │   ├── EditArticle.jsx      # Edit existing article
    │   │   ├── AuthorArticles.jsx   # Author's article dashboard
    │   │   ├── AuthorProfile.jsx    # Author profile page
    │   │   ├── UserProfile.jsx      # User profile page
    │   │   ├── AdminProfile.jsx     # Admin dashboard
    │   │   ├── ProtectedRoute.jsx   # Auth route guard
    │   │   ├── Unauthorized.jsx     # 403 page
    │   │   └── RootLayout.jsx       # App layout wrapper
    │   ├── store/
    │   │   └── authStore.js         # Zustand auth state
    │   └── styles/
    │       └── common.js            # Shared style constants
    └── index.html
```

## ✨ Features

- **Role-Based Access**: User, Author, and Admin roles with different permissions
- **Article Management**: Full CRUD — create, read, edit, soft-delete articles
- **Image Uploads**: Profile pictures via Cloudinary with Multer middleware
- **Authentication**: JWT-based auth with httpOnly cookies
- **Comments System**: Users can comment on articles
- **Admin Panel**: Admin can manage users and articles
- **Protected Routes**: Frontend route guards based on user role
- **State Management**: Zustand for global auth state

## 🔌 API Endpoints

### Authentication (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user (with profile image) |
| POST | `/auth/login` | Login and receive JWT |
| POST | `/auth/logout` | Clear auth cookie |

### User Routes (`/user-api`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/articles` | Get all active articles |
| GET | `/user-api/articles/:id` | Get article by ID |
| PUT | `/user-api/comments/:id` | Add comment to article |

### Author Routes (`/author-api`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/author-api/articles` | Get author's articles |
| POST | `/author-api/articles` | Create new article |
| PUT | `/author-api/articles/:id` | Update article |
| PUT | `/author-api/articles/:id/softdelete` | Soft-delete article |

### Admin Routes (`/admin-api`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin-api/users` | Get all users |
| PUT | `/admin-api/users/toggle-block/:id` | Block/unblock user |
| PUT | `/admin-api/articles/toggle-block/:id` | Block/unblock article |

## 💡 Concepts Covered

- Full MERN stack architecture
- JWT authentication with httpOnly cookies
- Role-based authorization middleware
- File upload pipeline (Multer → Cloudinary → CDN URL → MongoDB)
- Mongoose schema design with references
- Express error handling (validation, duplicate key, cast errors)
- React Router v7 with nested routes
- Zustand state management
- Protected/private routes
- CORS configuration with credentials

## ▶️ How to Run

```bash
# Backend
cd BlogApp/Backend-capstoneproject
npm install
# Create .env file with: DB_URL, PORT, SECRET_KEY, CLOUD_NAME, API_KEY, API_SECRET
node server.js

# Frontend (in a new terminal)
cd BlogApp/frontend
npm install
npm run dev
```

> **Prerequisites**: MongoDB, Cloudinary account (for image uploads)
