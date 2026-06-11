# System Architecture

## Current Architecture

```text
Frontend (Next.js)
        │
        ▼
Backend (Express.js REST APIs)
        │
        ▼
MongoDB Atlas
```

---

# Backend Startup Flow

```text
server.js
    ↓
Load .env
    ↓
Connect MongoDB
    ↓
Start Express
    ↓
Register Middleware
    ↓
Register Routes
    ↓
Serve APIs
```

---

# Backend Structure

```text
server
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── utils
├── server.js
│
└── .env
```

---

# Current Modules

## Category Module

### Category

* categoryId
* name
* slug
* isActive

---

## Product Module

### Product

* productId
* name
* slug
* category
* description
* price
* unit
* approximatePiecesPerKg
* minOrderQuantity
* estimatedDeliveryDays
* images
* isAvailable
* customizable

---

## User Module

### User

* name
* email
* phone
* password
* role

Roles:

* customer
* admin

---

# Database Collections

```text
users
categories
products
```

---

# Relationships

```text
Category (1)
      │
      ▼
Product (Many)
```

A category can contain multiple products.

---

# Authentication Flow

```text
User Registration
        ↓
Validate Request
        ↓
Hash Password (bcrypt)
        ↓
Store User in MongoDB
        ↓
User Login
        ↓
Verify Password
        ↓
Generate JWT
        ↓
Store JWT in HTTP-Only Cookie
        ↓
Access Protected Routes
```

---

# Authorization Flow

```text
Request
   ↓
protect Middleware
   ↓
Verify JWT
   ↓
Find User
   ↓
Attach User to req.user
   ↓
adminOnly Middleware
   ↓
Check User Role
   ↓
Allow / Deny Access
```

---

# Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* HTTP-Only Cookies
* Protected Routes
* Role-Based Authorization
* Admin Access Control

---

# Upcoming Modules

## Phase 6

* Cart Module
* 7-Day Cart Expiry

## Phase 7

* Order Management

## Phase 8

* Razorpay Payment Integration

## Phase 9

* Admin Dashboard

## Phase 10

* Deployment & Production Setup
