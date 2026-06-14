# Homemade by Amma

A production-ready homemade bulk food ordering platform built for my mother's business.

## Project Vision

Homemade by Amma helps customers place bulk orders for freshly prepared homemade food items for:

* Weddings
* Housewarming ceremonies
* Birthdays
* Festivals
* Religious functions
* Family celebrations

Products are prepared only after order confirmation to ensure freshness and quality.

---

# Categories

* Sweets
* Pickles
* Spicy & Crunchy Snacks
* Fresh Homemade Flours
* Festival Specials

---

# Tech Stack

## Frontend

* Next.js
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT
* HTTP-Only Cookies
* bcrypt Password Hashing

## Payments (Upcoming)

* Razorpay

## Image Storage (Upcoming)

* Cloudinary

---

# Features Completed

## Phase 1 – Project Setup

* Full-stack project structure
* Frontend setup
* Backend setup
* GitHub repository setup

---

## Phase 2 – Database & Categories

* MongoDB Atlas integration
* Category schema
* Category CRUD APIs

---

## Phase 3 – Product Module

* Product schema
* Product CRUD APIs
* Category–Product relationship
* Mongoose Populate

---

## Phase 4 – Product Validation

* Required field validation
* Duplicate Product ID validation
* Duplicate slug validation
* Category existence validation

---

## Phase 5 – Authentication & Authorization

### Authentication

* User Registration
* User Login
* Password hashing with bcrypt
* JWT Authentication
* HTTP-Only Cookie Authentication

### Protected Routes

* Authentication middleware
* Protected Profile API

### Authorization

* Role-based Access Control
* Admin-only middleware
* Protected Admin APIs

---

## Phase 6 – Shopping Cart Module

### Cart Management

* Cart schema
* Add product to cart
* View cart
* Update quantity
* Remove cart item
* Clear cart

### Cart Features

* User-specific carts
* Product population
* Automatic 7-day cart expiry
* JWT-protected APIs
* Persistent cart storage

---

## Phase 7 – Order Management

### Customer Features

* Place Order
* Get My Orders
* Get Single Order Details

### Admin Features

* Get All Orders
* Get Single Order Details
* Update Order Status
* Update Payment Status

### Business Logic

* Auto-generated Order IDs
* Order Status workflow validation
* Payment Status workflow validation
* Delivery Address support
* Preferred Delivery Date
* Order Notes
* User population
* Order history
* Secure admin-only endpoints

---

## Architecture Improvements

### Shared Constants

* Roles
* Order Status
* Payment Status
* API Messages

### Utility Helpers

* Order ID Generator
* Order Status Transition Validator
* Payment Status Transition Validator

### Backend Improvements

* Centralized constants
* Cleaner controller logic
* Scalable folder structure
* Consistent API responses

---

# Project Structure

```text
homemade-by-amma/
│
├── client/
│
├── server/
│   ├── src/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── ...
│
├── docs/
│
└── README.md
```

---

# Current Database Collections

* users
* categories
* products
* carts
* orders

---

# Upcoming Features

## Phase 8 – Payment Integration

* Razorpay Integration
* Online Payments
* Payment Verification

---

## Phase 9 – Admin Dashboard

* Dashboard UI
* Order Management UI
* Product Management UI
* Category Management UI

---

## Phase 10 – Deployment

* Backend Deployment
* Frontend Deployment
* Production Configuration

---

# Future Enhancements

* Cloudinary Image Upload
* SEO Optimization
* Delivery Management
* Order Tracking
* WhatsApp Notifications
* Email Notifications
* Customer Reviews & Ratings
* Coupons & Discounts
* Inventory Management
* Analytics Dashboard

---

# Author

**Mangina Leelavathi Satya Krishna Priya**

Built with ❤️ for my mother's homemade food business.
