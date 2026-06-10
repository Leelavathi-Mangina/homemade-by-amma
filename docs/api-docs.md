# API Documentation

Base URL

http://localhost:5000/api

## Health Check

GET /health

Response

{
"success": true,
"message": "Homemade by Amma API is running"
}

## Categories

### Create Category

POST /categories

Request Body

{
"categoryId": "01",
"name": "Sweets",
"slug": "sweets"
}

### Get Categories

GET /categories

## Products

### Create Product

POST /products

Request Body

{
"productId": "001",
"name": "Boondi Laddu",
"slug": "boondi-laddu",
"category": "categoryObjectId",
"description": "Fresh homemade boondi laddus",
"price": 450
}

### Get Products

GET /products

## Product Validation

Implemented validations:

* Required field validation
* Duplicate productId validation
* Duplicate slug validation
* Category existence validation
