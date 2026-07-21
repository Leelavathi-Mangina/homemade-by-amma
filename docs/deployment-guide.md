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

### Payments

* Razorpay

### Image Storage (Future)

* Cloudinary

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret
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

```text
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

```text
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

```text
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

## Configuration

* db.js
* razorpay.js

## Constants

* roles.js
* orderStatus.js
* paymentStatus.js
* payment.js
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

```text
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

# Payment Features

Implemented:

* Razorpay order creation
* Razorpay payment verification
* HMAC SHA-256 signature verification
* Duplicate Razorpay order prevention
* Expiry-based Razorpay order regeneration
* Configurable Razorpay order expiry
* Secure environment variable configuration
* JWT-protected payment APIs

### Payment Flow

```text
Customer Places Order
        │
        ▼
Create Business Order
        │
        ▼
Create Razorpay Order
        │
        ▼
Customer Completes Payment
        │
        ▼
Verify Razorpay Signature
        │
        ▼
Update Payment Status
```

---

# Planned Production Deployment

## Frontend Deployment

Platform:

* Vercel

Responsibilities:

* Host Next.js application
* SEO optimization
* Static asset delivery
* Razorpay Checkout Integration

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
* Razorpay integration
* Payment verification
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

## Custom Domain

Example:

```text
www.homemadebyamma.com
```

---

# Current Data Models

## Category

Fields:

- categoryId
- name
- slug
- description
- image (Cloudinary-ready)
- isActive

The image field is intentionally included before Cloudinary integration so that no schema changes are required later when category images are uploaded.


# Deployment Status

## Completed

* ✅ MongoDB Atlas Setup
* ✅ Environment Variables Setup
* ✅ Category Module
* ✅ Product Module
* ✅ Authentication & Authorization
* ✅ Shopping Cart Module
* ✅ Order Management Backend
* ✅ Razorpay Integration
* ✅ Payment Verification
* ✅ Duplicate Razorpay Order Prevention
* ✅ Expiry-based Razorpay Order Regeneration
* ✅ Shared Constants
* ✅ Utility Helpers
* ✅ Order & Payment Status Workflow Validation

---

## Pending

* Cloudinary Integration
* Customer Dashboard UI
* Admin Dashboard UI
* Razorpay Checkout (Frontend)
* Frontend Deployment
* Backend Deployment
* Production Domain Setup
* SSL Configuration
* Logging & Monitoring
* Performance Optimization
* API Rate Limiting
* Backup & Recovery Strategy
