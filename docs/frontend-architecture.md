# Frontend Architecture

## Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── cart/
│   │   └── page.js
│   ├── categories/
│   │   └── page.js
│   ├── checkout/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── orders/
│   │   └── page.js
│   ├── products/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   ├── profile/
│   │   └── page.js
│   ├── signup/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── common/
│   │   └── Logo.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── CategoriesPreview.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── ProductCard.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Testimonials.jsx
│   │   └── TestimonialCard.jsx
│   │
│   ├── about/
│   │   ├── AboutHero.jsx
│   │   ├── OurStory.jsx
│   │   ├── OurValues.jsx
│   │   ├── ValueCard.jsx
│   │   ├── PreparationProcess.jsx
│   │   ├── ProcessCard.jsx
│   │   ├── WhyTrustUs.jsx
│   │   ├── TrustCard.jsx
│   │   └── AboutCTA.jsx
│   │
│   ├── categories/
│   │   ├── CategorySummary.jsx
│   │   └── CategoryGrid.jsx
│   │
│   ├── contact/
│   │   ├── ContactCards.jsx
│   │   ├── ContactCard.jsx
│   │   ├── BusinessHours.jsx
│   │   └── ContactForm.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── DesktopNav.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── MobileMenuButton.jsx
│   │   ├── NavbarActions.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterLinks.jsx
│   │   └── FooterContact.jsx
│   │
│   ├── products/
│   │   ├── PageHeader.jsx
│   │   ├── ProductToolbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── profile/
│   │   ├── ProfileCard.jsx
│   │   └── ProfileActions.jsx
│   │
│   └── ui/
│       └── Button.jsx
│
├── context/
│   ├── AuthContext.js
│   └── CartContext.js
│
├── lib/
│   └── api/
│       ├── auth.js
│       ├── cart.js
│       ├── category.js
│       ├── config.js
│       ├── order.js
│       ├── product.js
│       └── user.js
│
├── constants/
│   ├── contact.js
│   ├── features.js
│   ├── navigation.js
│   ├── preparationProcess.js
│   ├── testimonials.js
│   ├── trust.js
│   └── values.js
```

---

# Routing

- /
- /products
- /products/[slug]
- /categories
- /about
- /contact
- /signup
- /login
- /profile
- /cart
- /checkout
- /orders

---

# API Integration

## Authentication

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/me

---

## Users

- GET /api/users/profile

---

## Categories

- GET /api/categories

---

## Products

- GET /api/products
- GET /api/products/featured
- GET /api/products/:slug

---

## Cart

- GET /api/cart
- POST /api/cart
- PATCH /api/cart
- DELETE /api/cart/:productId
- DELETE /api/cart

---

## Orders

- POST /api/orders
- GET /api/orders/my-orders
- GET /api/orders/:orderId
---
# State Management

- React Context API
- AuthContext
- CartContext
- Local Component State
- URL Search Parameters
- Server Components for Data Fetching
- Client Components for Interactive UI
- Shared State Synchronization (Authentication & Cart)
- React Hooks (useState, useEffect, useContext)

---

# Shared Layout

```text
RootLayout
├── AuthProvider
│   └── CartProvider
│       ├── Navbar
│       ├── Main
│       │   └── Current Page
│       └── Footer
```

---

# Component Hierarchy

## Homepage

```text
HomePage
├── Hero
├── CategoriesPreview
│   └── CategoryCard
├── FeaturedProducts
│   └── ProductCard
├── WhyChooseUs
│   └── FeatureCard
├── Testimonials
│   └── TestimonialCard
└── Footer
```

---

## Products Page

```text
ProductsPage
├── PageHeader
├── ProductToolbar
│   ├── SearchBar
│   └── CategoryFilter
└── ProductGrid
    └── ProductCard
```

---

## Product Details Page

```text
ProductDetailsPage
└── ProductDetails
    ├── Product Image
    ├── Product Information
    ├── Ingredients
    ├── Shelf Life
    ├── Quantity Selector
    └── Add To Cart Button
```

---

## Categories Page

```text
CategoriesPage
├── CategorySummary
└── CategoryGrid
    └── CategoryCard
```

---

## About Page

```text
AboutPage
├── AboutHero
├── OurStory
├── OurValues
│   └── ValueCard
├── PreparationProcess
│   └── ProcessCard
├── WhyTrustUs
│   └── TrustCard
└── AboutCTA
```

---

## Contact Page

```text
ContactPage
├── ContactCards
│   └── ContactCard
├── BusinessHours
├── ContactForm
└── Footer
```

---

## Authentication

```text
SignupPage
└── SignupForm

LoginPage
└── LoginForm
```

---

## Profile Page

```text
ProfilePage
├── ProfileCard
└── ProfileActions
```

---

## Cart Page

```text
CartPage
├── Cart Items
│   └── Cart Item
├── Quantity Controls
├── Remove Item
└── Order Summary
    └── Proceed To Checkout
```

---

## Checkout Page

```text
CheckoutPage
├── Delivery Details Form
├── Order Summary
└── Place Order Button
```

---

## Orders Page

```text
OrdersPage
└── Order List
```


---

# Homepage Features

- Hero section
- Categories preview
- Featured products
- Why Choose Us
- Testimonials
- Responsive footer
- Backend-ready homepage architecture

---

# Product Catalog Features

- Dedicated Products page
- Live search
- Dynamic category filtering
- Controlled components
- Product counter
- Empty state
- Clear search
- Responsive product grid
- Backend API integration
- Dynamic product loading
- Featured products support

---

# Product Details Features

- Dynamic slug routing
- Backend product fetching
- Product image display
- Product information
- Product pricing
- Category display
- Ingredients section
- Shelf life information
- Made-to-order badge
- Quantity selector
- Minimum order quantity validation
- Add to Cart integration
- Authentication-aware Add to Cart

---

# Product Data Model

- SEO-friendly product slugs
- Numeric pricing
- Product units
- Short descriptions
- Detailed descriptions
- Ingredients
- Shelf life
- Made-to-order flag
- Minimum order quantity
- Product images
- Category relationship
- Backend-ready product structure

---

# Categories Page Features

- Dynamic category summary
- Responsive category grid
- Category navigation to Products page
- URL query parameter support
- Backend category integration

---

# About Page Features

## About Hero

- Business introduction
- Browse Products CTA

## Our Story

- Family business story
- Homemade philosophy

## Our Values

- Reusable ValueCard
- Data-driven rendering

## Preparation Process

- Four-step homemade workflow
- Order-based preparation
- Reusable ProcessCard

## Why Customers Trust Us

- Reusable TrustCard
- Trust highlights
- Data-driven rendering

## Final CTA

- Browse Products button
- Navigation to Products page

---

# Contact Page Features

## Contact Information

- Phone
- Email
- Location
- Business hours
- Reusable ContactCard
- Data-driven rendering

## Contact Form

- Name
- Phone Number
- Email (Optional)
- Product / Occasion
- Message
- Backend-ready form
- Reusable Button component

---

# Authentication Features

## Signup

- Customer registration
- Form validation
- Backend integration
- Automatic login after signup
- Protected cookie authentication

## Login

- Customer login
- Backend authentication
- Automatic navbar update
- Persistent session
- Protected routes

## Logout

- Secure logout
- Cookie removal
- Instant UI update

---

# Profile Features

- Protected profile page
- Customer information
- Authentication guard
- Responsive profile layout

---

# Cart Features

- Add to cart
- Dynamic cart badge
- Quantity update
- Remove item
- Minimum order quantity enforcement
- Real-time subtotal calculation
- Real-time total calculation
- Persistent backend cart
- Authentication-aware cart
- Proceed to checkout

---

# Checkout Features

- Protected checkout page
- Delivery details form
- Customer phone prefilled
- Order summary
- Preferred delivery date
- Special instructions
- Place order
- Backend order creation
- Automatic cart clearing after successful order
- Redirect to Orders page

---

# Orders Features

- Customer orders page
- Order history
- Backend order integration
- Automatic redirect after successful order placement
---

# State Architecture

```text
AuthProvider
        │
        ▼
CartProvider
        │
        ├──────────────────────────────┐
        ▼                              ▼
AuthContext                       CartContext
(user, loading)             (cart, loading)
        │                              │
        ├──────────────┐               ├──────────────┐
        ▼              ▼               ▼              ▼
NavbarActions      ProfilePage      CartPage     CheckoutPage
        │                              │
        │                              ▼
        │                     Quantity Controls
        │                              │
        │                              ▼
        │                        Order Summary
        │
        ▼
Login / Logout
```

---

```text
ProductsPage
        │
        ▼
search
category
        │
        ├──────────────┐
        ▼              ▼
ProductToolbar    ProductGrid
```

State is lifted to the page component while reusable child components receive data via props.

---

```text
ProductDetails
        │
        ▼
quantity
        │
        ▼
Add To Cart
        │
        ▼
CartContext
        │
        ▼
Navbar Badge
```

Cart state is managed globally using React Context, allowing every page to stay synchronized without refresh.

---

# Data Architecture

```text
MongoDB
    │
    ▼
Backend REST APIs
    │
    ├──────────────┬──────────────┬──────────────┬──────────────┐
    ▼              ▼              ▼              ▼
Products      Categories      Users         Cart/Orders
    │              │              │               │
    ▼              ▼              ▼               ▼
API Layer (lib/api)
    │
    ▼
React Context / Server Components
    │
    ▼
Reusable UI Components
```

---

## Homepage

```text
GET /api/products/featured
        │
        ▼
FeaturedProducts
        │
        ▼
ProductCard
```

---

## Products

```text
GET /api/products
        │
        ▼
ProductsPage
        │
        ▼
ProductGrid
        │
        ▼
ProductCard
```

---

## Product Details

```text
GET /api/products/:slug
        │
        ▼
ProductDetailsPage
        │
        ▼
ProductDetails
        │
        ▼
Add To Cart
```

---

## Categories

```text
GET /api/categories
        │
        ▼
CategoryFilter
        │
        ▼
ProductsPage
```

---

## Authentication

```text
GET /api/users/profile
        │
        ▼
AuthContext
        │
        ▼
Navbar
Profile
Checkout
Cart
```

---

## Cart

```text
GET /api/cart
POST /api/cart
PATCH /api/cart
DELETE /api/cart/:productId
DELETE /api/cart
        │
        ▼
CartContext
        │
        ├──────────────┬──────────────┐
        ▼              ▼              ▼
Navbar Badge      Cart Page     Checkout
```

---

## Orders

```text
POST /api/orders
GET /api/orders/my-orders
GET /api/orders/:orderId
        │
        ▼
Checkout
        │
        ▼
Orders Page
```

---

## Static Data

```text
FEATURES
        │
        ▼
WhyChooseUs
        │
        ▼
FeatureCard
```

```text
TESTIMONIALS
        │
        ▼
Testimonials
        │
        ▼
TestimonialCard
```

```text
VALUES
        │
        ▼
OurValues
        │
        ▼
ValueCard
```

```text
PREPARATION_PROCESS
        │
        ▼
PreparationProcess
        │
        ▼
ProcessCard
```

```text
TRUST_POINTS
        │
        ▼
WhyTrustUs
        │
        ▼
TrustCard
```

```text
CONTACT_INFO
        │
        ▼
ContactCards
        │
        ▼
ContactCard
```

All UI components remain independent of the data source, making backend integration straightforward.

---

# Authentication Flow

## Features Implemented

- User Registration
- User Login
- JWT Authentication (HttpOnly Cookies)
- Persistent Login after Page Refresh
- Protected Routes
- Protected Profile API
- Auth Context
- Dynamic Navbar
- Logout

## Flow

```text
Signup / Login
        │
        ▼
Backend verifies credentials
        │
        ▼
JWT stored in HttpOnly Cookie
        │
        ▼
AuthProvider loads
        │
        ▼
GET /api/users/profile
        │
        ▼
User stored in AuthContext
        │
        ├──────────────┐
        ▼              ▼
Profile          Navbar updates
```

```text
Logout
        │
        ▼
Backend clears JWT cookie
        │
        ▼
AuthContext clears user
        │
        ▼
CartContext clears cart
        │
        ▼
Navbar returns to Login state
```

---

# Cart Flow

```text
Product Details
        │
        ▼
Select Quantity
        │
        ▼
Add To Cart
        │
        ▼
POST /api/cart
        │
        ▼
CartContext updates
        │
        ├──────────────┬──────────────┐
        ▼              ▼              ▼
Navbar Badge      Cart Page     Checkout
```

```text
Place Order
        │
        ▼
POST /api/orders
        │
        ▼
Backend creates Order
        │
        ▼
Backend clears Cart
        │
        ▼
CartContext reloads
        │
        ▼
Redirect to Orders Page
```
---

# Design Principles

- Mobile-first development
- Component-based architecture
- Reusable UI components
- Data-driven rendering
- Separation of UI and data
- Lifted state management
- Shared application layout
- Single Responsibility Principle (SRP)
- API-first frontend architecture
- Backend-driven dynamic content
- Authentication using JWT & HttpOnly Cookies
- Context-based global state management (Auth & Cart)
- Persistent user sessions
- Route-based dynamic navigation
- Server Components for data fetching
- Client Components for interactive UI
- Responsive and accessible design
- SEO-friendly routing using product slugs
- Secure protected routes
- Cart synchronization across the application
- Checkout workflow with backend validation
- Order-driven architecture
- Scalable and modular folder structure
- Future-ready for Razorpay payment integration
- Future-ready for Admin Dashboard integration
- Production-ready architecture

---

## Current Progress

- ✔ Next.js Setup
- ✔ Global Theme
- ✔ Responsive Navbar
- ✔ Shared Layout

### Homepage

- ✔ Homepage Completed
- ✔ Hero Section
- ✔ Categories Preview
- ✔ Featured Products
- ✔ Why Choose Us
- ✔ Testimonials
- ✔ Responsive Footer

### Product Catalog

- ✔ Product Catalog Completed
- ✔ Live Search
- ✔ Dynamic Category Filtering
- ✔ Product Counter
- ✔ Empty State
- ✔ URL Category Navigation
- ✔ Controlled Components
- ✔ Data-driven Rendering

### Product Details

- ✔ Dynamic Product Details Page
- ✔ Product Slug Routing
- ✔ Product Information Display
- ✔ Product Detail Navigation
- ✔ Quantity Selector
- ✔ Minimum Order Quantity Validation
- ✔ Add to Cart Integration

### Categories

- ✔ Categories Page Completed
- ✔ Backend Category Integration

### About

- ✔ About Page Completed

### Contact

- ✔ Contact Page Completed

### Product Data Model

- ✔ Enhanced Product Data Model
- ✔ Backend-ready Product Structure

### Backend Integration

- ✔ Product API Integration
- ✔ Category API Integration
- ✔ Featured Products API Integration
- ✔ Dynamic Product Search
- ✔ Dynamic Category Filtering
- ✔ End-to-End Frontend & Backend Catalog Integration

### Authentication

- ✔ Customer Registration
- ✔ Customer Login
- ✔ JWT Authentication (HttpOnly Cookies)
- ✔ Authentication Context
- ✔ Persistent Login After Refresh
- ✔ Protected Profile API Integration
- ✔ Dynamic Authentication Navbar
- ✔ Customer Logout
- ✔ Protected Profile Route
- ✔ Customer Profile Page
- ✔ End-to-End Authentication Flow

### Cart

- ✔ Cart Context
- ✔ Add to Cart
- ✔ Dynamic Cart Badge
- ✔ Persistent Backend Cart
- ✔ Quantity Update
- ✔ Remove Cart Item
- ✔ Real-time Cart Synchronization
- ✔ Minimum Order Quantity Validation
- ✔ Dynamic Order Summary
- ✔ Protected Cart Page

### Checkout

- ✔ Checkout Page
- ✔ Delivery Details Form
- ✔ Order Summary
- ✔ Place Order Integration
- ✔ Backend Order API Integration
- ✔ Automatic Cart Clearing After Order Placement
- ✔ Redirect to Orders Page

### Orders

- ✔ Customer Orders Page
- ✔ Order Placement Flow
- ✔ Order History Integration

---

# Completed Phases (Frontend Continuation of Backend - 8 Phases)

## Phase 1 — Homepage

- ✔ Responsive Navbar
- ✔ Hero
- ✔ Categories Preview
- ✔ Featured Products
- ✔ Why Choose Us
- ✔ Testimonials
- ✔ Footer

---

## Phase 2 — Product Catalog

- ✔ Product Catalog
- ✔ Live Search
- ✔ Category Filtering
- ✔ Product Counter
- ✔ Empty State
- ✔ Dynamic Category Navigation

---

## Phase 3 — Customer Pages

- ✔ Categories Page
- ✔ About Page
- ✔ Contact Page
- ✔ Enhanced Product Data Model

---

## Phase 4 — Product Details Page

- ✔ Dynamic Product Routing
- ✔ Product Slug Navigation
- ✔ Product Details Display
- ✔ Ingredients Section
- ✔ Shelf Life Information
- ✔ Made-to-Order Workflow Display
- ✔ Quantity Selector
- ✔ Minimum Order Quantity Validation
- ✔ Add to Cart Integration
- ✔ Responsive Product Layout

---

## Phase 5 — Backend Integration

### Product & Catalog Integration

- ✔ Connected Products Page with Product API
- ✔ Connected Categories Page with Category API
- ✔ Connected Product Details Page with Product API
- ✔ Connected Featured Products with Featured Products API
- ✔ Replaced Static Constants with Backend Data
- ✔ Dynamic Product Search
- ✔ Dynamic Category Filtering

### Authentication

- ✔ Customer Registration
- ✔ Customer Login
- ✔ JWT Authentication (HttpOnly Cookies)
- ✔ Persistent Login After Refresh
- ✔ Protected Profile API Integration
- ✔ Authentication Context
- ✔ Dynamic Navbar Authentication
- ✔ Customer Logout
- ✔ Customer Profile Page
- ✔ Protected Profile Route

### Cart

- ✔ Cart Context
- ✔ Cart API Integration
- ✔ Add to Cart
- ✔ Update Cart Quantity
- ✔ Remove Cart Item
- ✔ Dynamic Cart Badge
- ✔ Persistent Backend Cart
- ✔ Minimum Order Quantity Validation
- ✔ Real-time Cart Synchronization

### Checkout & Orders

- ✔ Checkout Page
- ✔ Delivery Details Form
- ✔ Order Summary
- ✔ Place Order API Integration
- ✔ Automatic Cart Clearing After Successful Order
- ✔ Customer Orders Page
- ✔ Order History Integration

### Overall

- ✔ End-to-End Frontend & Backend Integration (Catalog, Authentication, Cart & Orders)

---

# Upcoming Roadmap

## Phase 6 — Customer Features

- Razorpay Checkout Integration
- Online Payment Flow
- Payment Verification
- Order Details Page
- Address Management
- Customer Dashboard Improvements
- Order Status Tracking
- Email Notifications

---

## Phase 7 — Admin Dashboard

- Admin Login
- Dashboard Overview
- Product Management (CRUD)
- Category Management (CRUD)
- Order Management
- Customer Management
- Image Upload Integration
- Sales Analytics

---

## Phase 8 — Deployment & Production

- Cloudinary Integration
- Frontend Deployment (Vercel)
- Backend Deployment (Render)
- Production Environment Configuration
- Custom Domain
- SSL Configuration
- Logging & Monitoring
- API Rate Limiting
- Performance Optimization
- Backup & Recovery Strategy
- Production Security Hardening