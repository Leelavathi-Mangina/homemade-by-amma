
````markdown
# Admin Product Management

## 1. Overview

The Admin Product Management phase provides administrators with the ability to view, create, edit, and control the availability and featured status of products in the Homemade by Amma application.

The implementation is divided between the Express/MongoDB backend and the Next.js frontend.

The admin product-management flow currently supports:

- Viewing all products
- Creating products
- Editing existing products
- Updating product availability
- Updating featured status
- Persisting product changes in MongoDB
- Restricting admin operations using authentication and authorization
- Displaying featured and available products on the customer-facing home page

---

## 2. Purpose

The purpose of this phase is to give the administrator control over the products displayed and sold through the application without requiring direct MongoDB access or API testing tools for normal product-management operations.

The administrator should be able to manage product information through the application UI.

This is especially important for the business owner because product availability may change frequently depending on stock, preparation capacity, or other business conditions.

---

## 3. Product Data Model

The product model is defined in:

`server/src/models/Product.js`

Each product contains the following major fields:

| Field | Purpose |
|---|---|
| `productId` | Unique business-level product identifier |
| `name` | Product name |
| `slug` | URL-friendly unique product identifier |
| `category` | Reference to the product category |
| `shortDescription` | Short customer-facing description |
| `description` | Detailed product description |
| `ingredients` | List of ingredients |
| `shelfLife` | Product shelf-life information |
| `madeToOrder` | Indicates whether the product is prepared after ordering |
| `price` | Product price |
| `unit` | Pricing unit such as kg |
| `approximatePiecesPerKg` | Approximate number of pieces per kg |
| `minOrderQuantity` | Minimum quantity that can be ordered |
| `estimatedDeliveryDays` | Estimated preparation/delivery time |
| `images` | Product image URLs |
| `isAvailable` | Controls whether customers can order the product |
| `customizable` | Indicates whether customization is supported |
| `featured` | Controls whether the product appears in featured products |
| `createdAt` | Creation timestamp |
| `updatedAt` | Last update timestamp |

The product references the `Category` model through MongoDB ObjectId.

---

## 4. Category Relationship

The category model is defined in:

`server/src/models/Category.js`

Categories contain:

- `categoryId`
- `name`
- `slug`
- `description`
- `image`
- `isActive`

Products store the category's MongoDB ObjectId in the `category` field.

When products are fetched, the backend uses Mongoose `populate("category")` so that the frontend receives category information along with the product.

Example:

```text
Product
   |
   +---- category
            |
            +---- Category
````

This allows the frontend to display the category name without performing a separate category lookup for every product.

---

## 5. Backend Architecture

### Product Model

Path:

`server/src/models/Product.js`

Responsible for defining the MongoDB product schema and validation rules.

### Product Controller

Path:

`server/src/controllers/productController.js`

The controller contains the business logic for product operations.

Implemented controller functions include:

* `createProduct`
* `updateProduct`
* `updateProductAvailability`
* `getProducts`
* `getFeaturedProducts`
* `getProductBySlug`
* `updateFeaturedStatus`

### Product Routes

Path:

`server/src/routes/productRoutes.js`

The routes connect HTTP requests to the corresponding controller functions.

The product routes are registered in:

`server/src/app.js`

using:

```text
/api/products
```

---

## 6. Product API Endpoints

### 6.1 Create Product

```http
POST /api/products
```

Creates a new product.

The controller validates:

* Required fields
* Category existence
* Product ID uniqueness
* Product slug uniqueness

A successful request returns HTTP `201`.

---

### 6.2 Get Products

```http
GET /api/products
```

Returns products.

Optional query parameters:

```text
category
search
```

Examples:

```text
GET /api/products
GET /api/products?category=sweets
GET /api/products?search=laddu
```

Products are returned with their populated category information.

---

### 6.3 Get Featured Products

```http
GET /api/products/featured
```

Returns products where:

```text
featured = true
isAvailable = true
```

This endpoint is used by the customer-facing Featured Products section on the home page.

Therefore, a product must satisfy both conditions to appear in the featured section:

```text
featured = true
        AND
isAvailable = true
```

---

### 6.4 Get Product by Slug

```http
GET /api/products/:slug
```

Returns a single product using its slug.

Example:

```text
GET /api/products/boondi-laddu
```

The category is populated in the response.

---

### 6.5 Update Product

```http
PATCH /api/products/:productId
```

Updates an existing product using its business-level `productId`.

The controller validates:

* Product existence
* Category existence when category is changed
* Slug uniqueness when slug is changed

The update operation supports fields including:

* name
* slug
* category
* shortDescription
* description
* ingredients
* shelfLife
* madeToOrder
* price
* unit
* approximatePiecesPerKg
* minOrderQuantity
* estimatedDeliveryDays
* images
* isAvailable
* customizable
* featured

---

### 6.6 Update Product Availability

```http
PATCH /api/products/:slug/availability
```

Updates the `isAvailable` field.

The request body contains:

```json
{
  "isAvailable": true
}
```

or:

```json
{
  "isAvailable": false
}
```

The backend verifies that `isAvailable` is a boolean.

The updated value is saved to MongoDB.

The response returns:

```json
{
  "productId": "002",
  "name": "Test Kaju Katli Updated",
  "isAvailable": true
}
```

---

### 6.7 Update Featured Status

```http
PATCH /api/products/:slug/featured
```

Updates whether a product is featured.

The `featured` value is stored in MongoDB and is later used by:

```http
GET /api/products/featured
```

to determine which products appear in the Featured Products section.

---

## 7. Admin Authorization

Admin-only functionality is protected using the existing authentication middleware.

Admin routes are defined in:

`server/src/routes/adminRoutes.js`

The middleware sequence used for admin operations is:

```text
protect
   ↓
adminOnly
   ↓
Controller
```

`protect` verifies that the user is authenticated.

`adminOnly` verifies that the authenticated user has the admin role.

This prevents normal customers from accessing admin-only operations.

The application also performs frontend role checks before displaying the admin product-management page.

---

## 8. Admin Product Management Frontend

The admin product-management page is located under:

```text
client/src/app/admin/products/
```

The page allows the administrator to view available products and manage product availability.

The frontend uses the API functions from:

```text
client/src/lib/api/products.js
```

Implemented API functions include:

* `getProducts`
* `getFeaturedProducts`
* `getProductBySlug`
* `updateProductAvailability`
* `updateProduct`

---

## 9. Product Listing in Admin Dashboard

The admin product page fetches products using:

```javascript
getProducts()
```

The products are displayed as individual cards.

Each product card currently displays information such as:

* Product ID
* Product name
* Availability status
* Short description
* Category
* Price
* Unit
* Minimum order quantity

The administrator can use the product-management interface instead of manually modifying MongoDB.

---

## 10. Product Availability Toggle

Product availability is controlled through a toggle in the admin interface.

The toggle represents:

```text
Available
```

or:

```text
Unavailable
```

When the administrator changes the toggle:

1. The frontend sends a PATCH request.
2. The backend validates the request.
3. The product is located using its product identifier.
4. `isAvailable` is updated.
5. The product is saved to MongoDB.
6. The API returns the updated availability.
7. The frontend updates the displayed product state.

This allows the business owner to temporarily stop accepting orders for a product without deleting it.

### Important Design Decision

A product should not be deleted merely because it is temporarily unavailable.

Instead:

```text
isAvailable = false
```

is used.

This preserves the product's information while preventing it from being offered to customers.

The business owner can later turn availability back on through the admin UI.

---

## 11. Product Editing

The admin product-management flow includes an edit page under:

```text
client/src/app/admin/products/[productId]/page.js
```

The administrator can open a product and modify product information.

The frontend sends the changes through:

```javascript
updateProduct(productId, productData)
```

which calls:

```http
PATCH /api/products/:productId
```

After a successful update:

1. The backend updates the MongoDB document.
2. The frontend receives the updated product.
3. The administrator is navigated back to the product-management page.

The update operation has been tested successfully.

For example, changing the test product price from:

```text
₹650/kg
```

to:

```text
₹700/kg
```

was reflected both in the browser and in MongoDB.

---

## 12. Featured Product Management

The product model contains:

```text
featured
```

This determines whether the product is intended to appear in the Featured Products section.

The featured-products API additionally checks availability.

Therefore:

```text
featured = true
isAvailable = true
```

is required for a product to appear in the customer-facing Featured Products section.

This prevents unavailable products from being displayed as products that customers can currently order.

---

## 13. Customer-Facing Featured Products

The customer home page uses:

```text
client/src/components/home/FeaturedProducts.jsx
```

The component calls:

```javascript
getFeaturedProducts()
```

The API endpoint is:

```http
GET /api/products/featured
```

The returned products are passed to:

```text
ProductCard
```

and displayed on the home page.

The home page itself is defined in:

```text
client/src/app/page.js
```

and includes:

```text
Hero
CategoriesPreview
FeaturedProducts
WhyChooseUs
Testimonials
```

---

## 14. Product Availability and Customer Visibility

Product availability directly affects customer-facing visibility in the Featured Products section.

The backend uses:

```javascript
{
  featured: true,
  isAvailable: true
}
```

when fetching featured products.

Therefore:

| Featured | Available | Appears in Featured Products |
| -------- | --------- | ---------------------------- |
| false    | false     | No                           |
| false    | true      | No                           |
| true     | false     | No                           |
| true     | true      | Yes                          |

This provides a simple separation between:

* whether a product is selected as a featured product
* whether the product is currently available for ordering

---

## 15. Testing and Verification

The product-management functionality has been tested through the application and MongoDB.

### Product Creation

A test product was created:

```text
Product ID: 002
Name: Test Kaju Katli
Price: ₹600/kg
```

The product was successfully created and appeared in MongoDB and the browser.

### Product Update

The product was subsequently updated.

Example:

```text
Name: Test Kaju Katli Updated
Price: ₹650/kg
Customizable: true
```

The changes were successfully reflected in:

* Browser
* MongoDB

The price was later updated to:

```text
₹700/kg
```

and the update was again verified in both the browser and MongoDB.

### Availability Update

The product availability was tested with both states:

```text
isAvailable = false
```

and:

```text
isAvailable = true
```

MongoDB was updated correctly in both cases.

### Featured Product Verification

The Featured Products endpoint was tested directly.

When the product had:

```text
featured = true
isAvailable = true
```

the product appeared in the Featured Products API response and subsequently appeared on the home page.

When:

```text
isAvailable = false
```

the product did not appear in the Featured Products response even when it remained featured.

This confirms that the backend availability condition is working correctly.

---

## 16. Error Handling

The product-management backend uses:

```text
ApiResponse
```

and:

```text
asyncHandler
```

for consistent API responses and asynchronous error handling.

Examples of handled errors include:

### Product Not Found

```text
404 Product not found
```

### Category Not Found

```text
404 Category not found
```

### Duplicate Product ID

```text
409 Product ID already exists
```

### Duplicate Product Slug

```text
409 Product slug already exists
```

### Invalid Availability Value

```text
400 isAvailable must be a boolean
```

The frontend displays API errors to the administrator when an operation fails.

---

## 17. Current File Structure

Relevant backend files:

```text
server/
└── src/
    ├── controllers/
    │   ├── productController.js
    │   └── categoryController.js
    │
    ├── models/
    │   ├── Product.js
    │   └── Category.js
    │
    ├── routes/
    │   ├── productRoutes.js
    │   └── adminRoutes.js
    │
    └── app.js
```

Relevant frontend files:

```text
client/
└── src/
    ├── app/
    │   ├── page.js
    │   └── admin/
    │       └── products/
    │           └── [productId]/
    │               └── page.js
    │
    ├── components/
    │   └── home/
    │       ├── FeaturedProducts.jsx
    │       └── ProductCard.jsx
    │
    └── lib/
        └── api/
            └── products.js
```

---

## 18. Current Status

### Completed

* [x] Product schema
* [x] Category relationship
* [x] Product creation API
* [x] Product listing API
* [x] Product details API
* [x] Product update API
* [x] Product availability API
* [x] Featured product API
* [x] Admin product listing
* [x] Admin product editing
* [x] Admin availability toggle
* [x] Admin authentication and authorization
* [x] MongoDB persistence
* [x] Featured product filtering by availability
* [x] Customer-facing featured product display
* [x] Browser verification
* [x] MongoDB verification

---

## 19. Future Enhancements

The following features are not considered complete in this phase and can be implemented in later phases:

* Product image upload and management
* Cloudinary integration for product images
* Multiple product image management through the admin UI
* Category management through the admin UI
* Product deletion or archival strategy, if required
* Better form validation and user-friendly error messages
* Confirmation dialogs for important changes
* Search and filtering improvements in the admin product dashboard
* Pagination for large product lists
* Loading states and success notifications
* Product management UI improvements

Image management should be implemented as a separate phase rather than being treated as completed functionality in this document.

---

## 20. Design Summary

The current product-management architecture follows this flow:

```text
                    ADMIN
                      |
                      v
             Next.js Admin UI
                      |
                      v
             Frontend API Layer
       client/src/lib/api/products.js
                      |
                      v
             Express Product Routes
       server/src/routes/productRoutes.js
                      |
                      v
            Product Controller
    server/src/controllers/productController.js
                      |
                      v
              Mongoose Product
          server/src/models/Product.js
                      |
                      v
                   MongoDB
```

For customer-facing featured products:

```text
MongoDB
   |
   v
Product Controller
   |
   | featured = true
   | isAvailable = true
   v
GET /api/products/featured
   |
   v
getFeaturedProducts()
   |
   v
FeaturedProducts.jsx
   |
   v
ProductCard
   |
   v
Home Page
```

This architecture keeps product-management business logic on the backend while allowing the administrator to manage products through the frontend application.

---

## 21. Phase Conclusion

The Admin Product Management phase establishes the basic product-management foundation required for the Homemade by Amma application.

The administrator can now manage product information and availability through the application, while customers receive only products that satisfy the appropriate availability and featured-product conditions.

The next major enhancement is **Product Image Management**, followed by other remaining admin and customer-facing features required before deployment.

```
```
