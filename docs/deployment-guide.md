# Deployment Guide

## Project Deployment Plan

### Frontend

* Next.js
* Deployment Platform: Vercel

### Backend

* Node.js
* Express.js
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

```env id="44u9g2"
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# Local Development Setup

## Frontend

```bash id="rfqf5l"
cd client
npm install
npm run dev
```

Runs on:

```text id="hr0jtk"
http://localhost:3000
```

---

## Backend

```bash id="24clrz"
cd server
npm install
npm run dev
```

Runs on:

```text id="ydcr89"
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
* orders

### Connection Flow

```text id="pxo94z"
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

## Constants

* roles.js
* orderStatus.js
* paymentStatus.js
* apiMessages.js

## Utilities

* generateOrderId.js
* ApiResponse.js
* asyncHandler.js
* orderStatusTransition.js
* paymentStatusTransition.js

### Benefits

These shared components improve:

* Maintainability
* Code consistency
* Reusability
* Scalability

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
* Order ownership verification
* Admin-only order management

### Authentication Flow

```text id="nr4miv"
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

# Order Management Features

Implemented:

* Place order
* Auto-generated Order IDs
* Customer order history
* Customer order details
* Admin order listing
* Admin order details
* Order status updates
* Payment status updates
* Order status workflow validation
* Payment status workflow validation
* Delivery address support
* Preferred delivery date
* Order notes

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
* Cart management
* Order management
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
* Order data

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
* Payment webhooks

---

## Custom Domain

Example:

```text id="w2o3ua"
www.homemadebyamma.com
```

---

# Deployment Status

## Completed

* ✅ MongoDB Atlas Setup
* ✅ Environment Variables Setup
* ✅ Category Module
* ✅ Product Module
* ✅ Authentication & Authorization
* ✅ Shopping Cart Module
* ✅ Order Management Backend
* ✅ Shared Constants
* ✅ Utility Helpers
* ✅ Order & Payment Status Workflow Validation

---

## Pending

* Razorpay Integration
* Cloudinary Integration
* Customer Dashboard UI
* Admin Dashboard UI
* Frontend Deployment
* Backend Deployment
* Production Domain Setup
* SSL Configuration
* Logging & Monitoring
* Performance Optimization
* API Rate Limiting
* Backup & Recovery Strategy
