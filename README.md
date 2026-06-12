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

## Categories

* Sweets
* Pickles
* Spicy & Crunchy Snacks
* Fresh Homemade Flours
* Festival Specials

---

## Tech Stack

### Frontend

* Next.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT
* HTTP-Only Cookies
* bcrypt Password Hashing

### Payments (Upcoming)

* Razorpay

### Image Storage (Upcoming)

* Cloudinary

---

## Features Completed

### Phase 1 - Project Setup

* Full-stack project structure
* Frontend setup
* Backend setup
* GitHub repository setup

### Phase 2 - Database & Categories

* MongoDB Atlas integration
* Category schema
* Category APIs

### Phase 3 - Product Module

* Product schema
* Product APIs
* Category-product relationship
* Mongoose populate()

### Phase 4 - Product Validation

* Required field validation
* Duplicate productId validation
* Duplicate slug validation
* Category existence validation

### Phase 5 - Authentication & Authorization

#### Authentication

* User registration API
* User login API
* Password hashing using bcrypt
* JWT token generation
* Cookie-based authentication

#### Protected Routes

* Authentication middleware
* Protected user profile route

#### Authorization

* Role-based access control
* Admin-only middleware
* Protected admin dashboard route

### Phase 6 - Shopping Cart Module

#### Cart Management

* Cart schema
* Add product to cart
* View cart
* Update product quantity
* Remove individual cart item
* Clear entire cart

#### Cart Features

* User-specific cart
* Product population using Mongoose
* Automatic 7-day cart expiry
* JWT-protected cart APIs
* Quantity management
* Persistent cart storage

### Project Architecture Improvements

* Shared constants for:

  * Roles
  * Order Status
  * Payment Status
  * API Messages
* Utility helper for generating Order IDs
* Scalable backend architecture for future business modules

---

## Project Structure

```text
homemade-by-amma/
│
├── client/
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

## Current Database Collections

* users
* categories
* products
* carts

---

## Upcoming Features

### Phase 7

* Order Management
* Order Status Tracking
* Customer Order History
* Admin Order Management

### Phase 8

* Razorpay Integration

### Phase 9

* Admin Dashboard UI

### Phase 10

* Deployment & Production Setup

### Future Enhancements

* SEO Optimization
* Delivery Management
* Customer Reviews
* Order Tracking
* WhatsApp Notifications
* Email Notifications

---

## Author

Mangina Leelavathi Satya Krishna Priya

Built with ❤️ for my mother's homemade food business.
