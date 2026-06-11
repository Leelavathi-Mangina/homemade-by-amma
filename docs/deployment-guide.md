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

Connection Flow:

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

# Authentication Setup

Authentication Method:

* JWT (JSON Web Token)

Security Features:

* bcrypt password hashing
* HTTP-only cookies
* Protected routes
* Role-based authorization

Authentication Flow:

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
Store Cookie
   ↓
Access Protected APIs
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

---

## Backend Deployment

Platform:

* Render

Responsibilities:

* REST API hosting
* Authentication
* Business logic
* Database communication

---

## Database Deployment

Platform:

* MongoDB Atlas

Responsibilities:

* User data
* Product data
* Category data
* Future order data

---

# Future Deployment Enhancements

## Cloudinary

Used for:

* Product images
* Category images
* Optimized image delivery

## Razorpay

Used for:

* Online payments
* Order payment verification

## Custom Domain

Example:

```text
www.homemadebyamma.com
```

---

# Deployment Status

## Completed

* MongoDB Atlas Setup
* Environment Variables Setup
* Authentication System
* Role-Based Authorization

## Pending

* Frontend Deployment
* Backend Deployment
* Cloudinary Integration
* Razorpay Integration
* Production Domain Setup
