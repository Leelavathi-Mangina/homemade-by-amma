# Deployment Guide

## Project Deployment Plan

### Frontend

* Next.js
* Deployment Platform: Vercel

### Backend

* Node.js + Express.js
* Deployment Platform: Render

### Database

* MongoDB Atlas

### Image Storage (Future)

* Cloudinary

### Payments (Future)

* Razorpay

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# Local Development Setup

## Frontend

```bash
cd client
npm install
npm run dev
```

Runs on:

```text id="1wzpw7"
http://localhost:3000
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

Runs on:

```text id="1khmld"
http://localhost:5000
```

---

# Database Setup

Database Provider:

* MongoDB Atlas

Current Collections:

* users
* categories
* products
* carts

Connection Flow

```text id="jl6fxc"
Application
     ↓
MongoDB Connection String
     ↓
MongoDB Atlas Cluster
     ↓
Database Collections
```

---

# Backend Architecture

Current shared backend components:

## Constants

* roles.js
* orderStatus.js
* paymentStatus.js
* apiMessages.js

## Utilities

* generateOrderId.js
* ApiResponse.js
* asyncHandler.js

These shared components improve maintainability, consistency, and scalability for future development.

---

# Authentication Setup

Authentication Method:

* JWT (JSON Web Token)

Security Features:

* bcrypt password hashing
* HTTP-only cookies
* Protected routes
* Role-based authorization
* User-specific resource protection

Authentication Flow

```text id="9o3xv6"
Register
   ↓
Hash Password
   ↓
Store User
   ↓
Login
   ↓
Generate JWT
   ↓
Store HTTP-Only Cookie
   ↓
Access Protected APIs
```

---

# Shopping Cart Features

Implemented:

* User-specific cart
* Add product to cart
* View cart
* Update product quantity
* Remove individual item
* Clear entire cart
* Automatic 7-day cart expiry
* Product population using Mongoose

---

# Planned Production Deployment

## Frontend Deployment

Platform:

* Vercel

Responsibilities:

* Host Next.js application
* SEO optimization
* Static asset delivery

---

## Backend Deployment

Platform:

* Render

Responsibilities:

* REST API hosting
* Authentication
* Business logic
* Shopping cart management
* Database communication

---

## Database Deployment

Platform:

* MongoDB Atlas

Responsibilities:

* User data
* Category data
* Product data
* Cart data
* Future order data

---

# Future Deployment Enhancements

## Cloudinary

Used for:

* Product images
* Category images
* Optimized image delivery

---

## Razorpay

Used for:

* Online payments
* Payment verification
* Secure transactions

---

## Custom Domain

Example:

```text id="e8ly8n"
www.homemadebyamma.com
```

---

# Deployment Status

## Completed

* MongoDB Atlas Setup
* Environment Variables Setup
* Category Module
* Product Module
* Authentication & Authorization
* Shopping Cart Module
* Shared Constants
* Utility Helpers

---

## Pending

* Order Management
* Razorpay Integration
* Cloudinary Integration
* Frontend Deployment
* Backend Deployment
* Production Domain Setup
* SSL Configuration
* Performance Optimization
