backend startup flow

server.js
    ↓
Load .env
    ↓
Connect MongoDB
    ↓
Start Express
    ↓
Serve APIs



# System Architecture

## Current Architecture

Frontend (Next.js)
|
v
Backend (Express.js REST APIs)
|
v
MongoDB Atlas

## Current Modules

### Category Module

Category

* categoryId
* name
* slug
* isActive

### Product Module

Product

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

## Relationships

Category (1) -----> (Many) Products

A category can contain multiple products.

## Upcoming Modules

* Authentication
* Cart
* Orders
* Payments
* Admin Panel
