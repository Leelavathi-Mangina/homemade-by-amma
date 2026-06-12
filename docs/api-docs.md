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

Success Response

```json
{
  "success": true,
  "message": "Category created successfully"
}
```

---

## Get Categories

### GET /categories

Success Response

```json
{
  "success": true,
  "message": "Categories fetched successfully"
}
```

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

Success Response

```json
{
  "success": true,
  "message": "Product created successfully"
}
```

---

## Get Products

### GET /products

Success Response

```json
{
  "success": true,
  "message": "Products fetched successfully"
}
```

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

# Cart

All cart APIs require user authentication.

## Add Product to Cart

### POST /cart/add

Authentication Required

Request Body

```json
{
  "productId": "6a2824bdfdd5a4914af63683",
  "quantity": 2
}
```

Success Response

```json
{
  "success": true,
  "message": "Product added to cart"
}
```

---

## Get User Cart

### GET /cart

Authentication Required

Success Response

```json
{
  "success": true,
  "message": "Cart fetched successfully"
}
```

---

## Update Cart Quantity

### PUT /cart/update

Authentication Required

Request Body

```json
{
  "productId": "6a2824bdfdd5a4914af63683",
  "quantity": 5
}
```

Success Response

```json
{
  "success": true,
  "message": "Cart updated successfully"
}
```

---

## Remove Cart Item

### DELETE /cart/remove/:productId

Authentication Required

Example

```text
DELETE /cart/remove/6a2824bdfdd5a4914af63683
```

Success Response

```json
{
  "success": true,
  "message": "Item removed from cart"
}
```

---

## Clear Cart

### DELETE /cart/clear

Authentication Required

Success Response

```json
{
  "success": true,
  "message": "Cart cleared successfully"
}
```

---

# Cart Features

Implemented:

* User-specific shopping cart
* Add products to cart
* View cart
* Update product quantity
* Remove individual items
* Clear entire cart
* Automatic 7-day cart expiry
* Product population using Mongoose
* JWT-protected cart APIs

---

# Authentication & Security

Implemented:

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Protected routes
* Role-based authorization
* Admin access control
* Secure user-specific cart operations
* Protected cart APIs using authentication middleware
