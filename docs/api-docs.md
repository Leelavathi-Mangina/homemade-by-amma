# API Documentation

## Base URL

```text
http://localhost:5000/api
```

---

## Health Check

### GET /health

Response

```json
{
  "success": true,
  "message": "Homemade by Amma API is running"
}
```

---

# Categories

## Create Category

### POST /categories

Request Body

```json
{
  "categoryId": "01",
  "name": "Sweets",
  "slug": "sweets"
}
```

## Get Categories

### GET /categories

---

# Products

## Create Product

### POST /products

Request Body

```json
{
  "productId": "001",
  "name": "Boondi Laddu",
  "slug": "boondi-laddu",
  "category": "categoryObjectId",
  "description": "Fresh homemade boondi laddus",
  "price": 450
}
```

## Get Products

### GET /products

---

# Product Validation

Implemented validations:

* Required field validation
* Duplicate productId validation
* Duplicate slug validation
* Category existence validation

---

# Authentication

## Register User

### POST /auth/register

Request Body

```json
{
  "name": "Leelavathi",
  "email": "leela@gmail.com",
  "phone": "9876543210",
  "password": "password123"
}
```

Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login User

### POST /auth/login

Request Body

```json
{
  "email": "leela@gmail.com",
  "password": "password123"
}
```

Success Response

```json
{
  "success": true,
  "message": "Login successful"
}
```

---

# Protected Routes

## Get User Profile

### GET /users/profile

Authentication Required

Success Response

```json
{
  "success": true,
  "message": "Profile fetched successfully"
}
```

---

# Admin Routes

## Admin Dashboard

### GET /admin/dashboard

Authentication Required

Admin Role Required

Success Response

```json
{
  "success": true,
  "message": "Welcome Admin"
}
```

Failure Response

```json
{
  "success": false,
  "message": "Access denied. Admin only."
}
```

---

# Security Features

Implemented:

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Protected routes
* Role-based authorization
* Admin access control
