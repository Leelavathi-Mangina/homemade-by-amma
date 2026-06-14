# API Documentation

## Base URL

```text
http://localhost:5000/api
```

---

# Health Check

## GET /health

### Response

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

#### Request Body

```json
{
  "categoryId": "01",
  "name": "Sweets",
  "slug": "sweets"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Category created successfully"
}
```

---

## Get Categories

### GET /categories

#### Success Response

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

#### Request Body

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

#### Success Response

```json
{
  "success": true,
  "message": "Product created successfully"
}
```

---

## Get Products

### GET /products

#### Success Response

```json
{
  "success": true,
  "message": "Products fetched successfully"
}
```

---

# Product Validation

Implemented:

* Required field validation
* Duplicate Product ID validation
* Duplicate slug validation
* Category existence validation

---

# Authentication

## Register User

### POST /auth/register

#### Request Body

```json
{
  "name": "Leelavathi",
  "email": "leela@gmail.com",
  "phone": "9876543210",
  "password": "password123"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login User

### POST /auth/login

#### Request Body

```json
{
  "email": "leela@gmail.com",
  "password": "password123"
}
```

#### Success Response

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

#### Success Response

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

#### Success Response

```json
{
  "success": true,
  "message": "Welcome Admin"
}
```

---

# Cart

All Cart APIs require user authentication.

## Add Product to Cart

### POST /cart/add

Authentication Required

#### Request Body

```json
{
  "productId": "6a2824bdfdd5a4914af63683",
  "quantity": 2
}
```

#### Success Response

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

#### Success Response

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

#### Request Body

```json
{
  "productId": "6a2824bdfdd5a4914af63683",
  "quantity": 5
}
```

#### Success Response

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

#### Success Response

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

#### Success Response

```json
{
  "success": true,
  "message": "Cart cleared successfully"
}
```

---

# Orders

All Order APIs require user authentication unless specified as Admin only.

## Place Order

### POST /orders

Authentication Required

#### Request Body

```json
{
  "deliveryAddress": {
    "fullName": "Leelavathi",
    "houseNo": "12-34",
    "street": "College Road",
    "villageOrCity": "Tekkali",
    "district": "Srikakulam",
    "state": "Andhra Pradesh",
    "pincode": "532201",
    "landmark": "Near AITAM College"
  },
  "phone": "9876543210",
  "orderNotes": "Please prepare fresh laddus.",
  "preferredDeliveryDate": "2026-06-20"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Order placed successfully"
}
```

---

## Get My Orders

### GET /orders/my-orders

Authentication Required

#### Success Response

```json
{
  "success": true,
  "message": "Orders fetched successfully"
}
```

---

## Get My Single Order

### GET /orders/:orderId

Authentication Required

#### Success Response

```json
{
  "success": true,
  "message": "Order fetched successfully"
}
```

---

# Admin Order Management

All endpoints below require:

* Authentication
* Admin Role

---

## Get All Orders

### GET /orders

#### Success Response

```json
{
  "success": true,
  "message": "Orders fetched successfully"
}
```

---

## Get Single Order

### GET /orders/admin/:orderId

#### Success Response

```json
{
  "success": true,
  "message": "Order fetched successfully"
}
```

---

## Update Order Status

### PATCH /orders/admin/:orderId/status

#### Request Body

```json
{
  "status": "Confirmed"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Order status updated successfully"
}
```

---

## Update Payment Status

### PATCH /orders/admin/:orderId/payment-status

#### Request Body

```json
{
  "paymentStatus": "Paid"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Payment status updated successfully"
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

# Order Features

Implemented:

* Place order from cart
* Automatic Order ID generation
* Customer order history
* Customer single order details
* Admin order listing
* Admin single order details
* Update order status
* Update payment status
* Order status workflow validation
* Payment status workflow validation
* Delivery address support
* Preferred delivery date
* Order notes
* Admin-only order management

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
* Secure order ownership validation
* Protected admin order APIs
