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
├── constants
├── controllers
├── middleware
├── models
├── routes
├── utils
├── server.js
│
└── .env
```

---

# Shared Components

## Constants

* roles.js
* orderStatus.js
* paymentStatus.js
* apiMessages.js

### Purpose

* Centralized user roles
* Order status management
* Payment status management
* Consistent API response messages

---

## Utilities

* generateOrderId.js
* ApiResponse.js
* asyncHandler.js
* orderStatusTransition.js
* paymentStatusTransition.js

### Purpose

* Generate unique business order IDs
* Standardize API responses
* Handle asynchronous errors
* Validate order status workflow
* Validate payment status workflow

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

### Roles

* customer
* admin

---

## Cart Module

### Cart

* user
* items
* product
* quantity
* expiresAt

### Features

* User-specific shopping cart
* Add products
* Update quantity
* Remove item
* Clear cart
* Automatic 7-day expiry
* Product population using Mongoose

---

## Order Module

### Order

* orderId
* user
* items
* deliveryAddress
* phone
* orderNotes
* preferredDeliveryDate
* totalAmount
* status
* paymentStatus
* createdAt

### Features

* Place order
* Auto-generated Order IDs
* Customer order history
* Customer single order details
* Admin order listing
* Admin single order details
* Order status updates
* Payment status updates
* Order status workflow validation
* Payment status workflow validation

---

# Database Collections

```text
users
categories
products
carts
orders
```

---

# Relationships

```text
Category (1)
      │
      ▼
Product (Many)

User (1)
      │
      ▼
Cart (1)

Cart (1)
      │
      ▼
Cart Items (Many)

Product (1)
      │
      ▼
Cart Items (Many)

User (1)
      │
      ▼
Orders (Many)

Order (1)
      │
      ▼
Order Items (Many)

Product (1)
      │
      ▼
Order Items (Many)
```

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

# Cart Flow

```text
User Login
      ↓
Authenticate User
      ↓
Add Product to Cart
      ↓
Create Cart (if not exists)
      ↓
Update Existing Cart
      ↓
View Cart
      ↓
Update Quantity
      ↓
Remove Item
      ↓
Clear Cart
```

---

# Order Flow

```text
User Login
      ↓
Authenticate User
      ↓
View Cart
      ↓
Place Order
      ↓
Generate Order ID
      ↓
Save Order
      ↓
Clear Cart
      ↓
Customer Views Orders
      ↓
Admin Manages Orders
      ↓
Update Order Status
      ↓
Update Payment Status
```

---

# Order Status Workflow

```text
Pending
    ↓
Confirmed
    ↓
Preparing
    ↓
Ready for Delivery
    ↓
Out for Delivery
    ↓
Delivered
```

Cancelled orders can occur before delivery according to business rules.

---

# Payment Status Workflow

```text
Pending
   ├──► Paid
   └──► Failed

Paid
   └──► Refunded
```

---

# Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* HTTP-Only Cookies
* Protected Routes
* Role-Based Authorization
* Admin Access Control
* User-specific cart protection
* User-specific order protection
* Order ownership verification
* Order status transition validation
* Payment status transition validation

---

# Current Project Progress

* ✅ Phase 1 – Project Setup
* ✅ Phase 2 – Database & Categories
* ✅ Phase 3 – Product Module
* ✅ Phase 4 – Product Validation
* ✅ Phase 5 – Authentication & Authorization
* ✅ Phase 6 – Shopping Cart Module
* ✅ Phase 7 – Order Management Backend

---

# Upcoming Modules

## Phase 8

* Razorpay Payment Integration
* Payment Verification
* Webhooks

---

## Phase 9

* Admin Dashboard
* Customer Dashboard
* Order Management UI
* Product Management UI

---

## Phase 10

* Deployment
* Production Configuration
* Security Hardening
* Performance Optimization
