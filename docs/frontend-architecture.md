# Frontend Architecture

## Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── categories/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── signup/
│   │   └── page.js
│   ├── products/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
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
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   └── SignupForm.jsx
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
│   └── ui/
│       └── Button.jsx
│
├── context/
│   └── AuthContext.js
│
├── lib/
│   └── api/
│       ├── config.js
│       ├── auth.js
│       ├── user.js
│       ├── products.js
│       └── categories.js
│
├── constants/
│   ├── navigation.js
│   ├── features.js
│   ├── testimonials.js
│   ├── values.js
│   ├── preparationProcess.js
│   ├── trust.js
│   └── contact.js
```

---

# Routing

* /
* /products
* /products/[slug]
* /categories
* /about
* /contact
* /login
* /signup

---

# API Integration

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/logout

### Users

* GET /api/users/profile

### Categories

* GET /api/categories

### Products

* GET /api/products
* GET /api/products/featured
* GET /api/products/:slug

---

# State Management

* React Context API
* AuthContext
* Local Component State
* URL Search Parameters
* Server Components for Data Fetching
* Client Components for Interactive UI


# Shared Layout

```text
RootLayout
├── Navbar
├── Main
│   └── Current Page
└── Footer
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

## Categories Page

```text
CategoriesPage
├── CategoriesHero
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
```text

```

---

## Contact Page

```text
ContactPage
├── ContactHero
├── ContactCards
│   └── ContactCard
├── OrderInformation
├── ContactForm
└── Footer
```
```text
```


---

# Homepage Features

* Hero section
* Categories preview
* Featured products
* Why Choose Us
* Testimonials
* Footer

---

# Product Catalog Features

* Dedicated Products page
* Live search
* Dynamic category filtering
* Controlled components
* Product counter
* Empty state
* Clear Search
* Responsive product grid

---

### Product Data Model

* SEO-friendly product slugs
* Numeric pricing
* Product units
* Short descriptions
* Detailed descriptions
* Ingredients
* Shelf life
* Made-to-order flag
* Backend-ready product structure

# Categories Page Features

* Categories hero
* Dynamic category summary
* Responsive category grid
* Category navigation to Products page
* URL query parameter support

---

# About Page Features

## About Hero

* Business introduction
* Browse Products CTA

## Our Story

* Family business story
* Homemade philosophy

## Our Values

* Reusable ValueCard
* Data-driven rendering

## Preparation Process

* Four-step homemade workflow
* Order-based preparation
* Reusable ProcessCard

## Why Customers Trust Us

* Reusable TrustCard
* Trust highlights
* Data-driven rendering

## Final CTA

* Browse Products button
* Navigation to Products page

## Contact Page Features

### Contact Hero

* Business-focused introduction
* Friendly customer messaging

### Contact Information

* Phone
* Email
* Location
* Reusable ContactCard
* Data-driven rendering

### Order Information

* Fresh preparation after confirmation
* Advance order guidance
* Order confirmation process

### Contact Form

* Name
* Phone Number
* Email (Optional)
* Product / Occasion
* Message
* Backend-ready form layout
* Reusable Button component


---

# State Architecture

```text
ProductsPage
        │
        ▼
 search
 category
        │
        ├─────────────┐
        ▼             ▼
ProductToolbar   ProductGrid
```

State is lifted to the page component while child components remain reusable.

---

# Data Architecture

```text
HOME_CATEGORIES
        │
        ▼
CategoriesPreview
        │
        ▼
CategoryCard

HOME_FEATURED_PRODUCTS
        │
        ▼
FeaturedProducts
        │
        ▼
ProductCard

Homepage Featured Products

MongoDB
   │
GET /api/products/featured
   │
products.js (API Layer)
   │
FeaturedProducts.jsx
   │
ProductCard.jsx

id
slug
name
category
price
unit
image
shortDescription
description
ingredients
shelfLife
madeToOrder

WHY_CHOOSE_US
        │
        ▼
WhyChooseUs
        │
        ▼
FeatureCard

TESTIMONIALS
        │
        ▼
Testimonials
        │
        ▼
TestimonialCard

PRODUCT_CATEGORIES
        │
        ▼
CategoryFilter

VALUES
        │
        ▼
OurValues
        │
        ▼
ValueCard

PREPARATION_PROCESS
        │
        ▼
PreparationProcess
        │
        ▼
ProcessCard

TRUST_POINTS
        │
        ▼
WhyTrustUs
        │
        ▼
TrustCard
        │
        ▼
```text
CONTACT_INFO
        │
        ▼
ContactCards
        │
        ▼
ContactCard

```

```

All UI components remain independent of the data source, making backend integration straightforward.

---

## Authentication Flow

### Features Implemented

- User Registration
- User Login
- JWT Authentication using HttpOnly Cookies
- Persistent Login after Page Refresh
- Protected Profile API
- Auth Context
- Dynamic Navbar
- Logout

### Flow

Signup/Login
        ↓
Backend verifies credentials
        ↓
JWT stored in HttpOnly Cookie
        ↓
AuthProvider loads
        ↓
GET /api/users/profile
        ↓
User stored in AuthContext
        ↓
Navbar updates automatically

Logout
        ↓
Backend clears JWT cookie
        ↓
AuthContext clears user
        ↓
Navbar returns to Login state

---

# Design Principles

* Mobile-first development
* Component-based architecture
* Reusable UI components
* Data-driven rendering
* Separation of UI and data
* Lifted state management
* Shared application layout
* Single Responsibility Principle (SRP)
* API-first frontend architecture
* Backend-driven dynamic content
* Authentication using JWT & HttpOnly Cookies
* Context-based global authentication state
* Persistent user sessions
* Route-based dynamic navigation
* Scalable and modular folder structure
* Future-ready production architecture

---

## Current Progress

* ✔ Next.js Setup
* ✔ Global Theme
* ✔ Responsive Navbar
* ✔ Shared Layout
* ✔ Homepage Completed
* ✔ Product Catalog Completed
* ✔ Categories Page Completed
* ✔ About Page Completed
* ✔ Contact Page Completed
* ✔ Live Search
* ✔ Dynamic Category Filtering
* ✔ Product Counter
* ✔ Empty State
* ✔ URL Category Navigation
* ✔ Controlled Components
* ✔ Data-driven Rendering
* ✔ Enhanced Product Data Model
* ✔ Backend-ready Product Structure
* ✔ Dynamic Product Details Page
* ✔ Product Slug Routing
* ✔ Product Information Display
* ✔ Product Detail Navigation
* ✔ Product API Integration
* ✔ Category API Integration
* ✔ Featured Products API Integration
* ✔ Dynamic Product Search from Backend
* ✔ Dynamic Category Filter from Backend
* ✔ Customer Registration
* ✔ Customer Login
* ✔ JWT Authentication (HttpOnly Cookies)
* ✔ Persistent Login After Refresh
* ✔ Authentication Context
* ✔ Protected Profile API Integration
* ✔ Dynamic Authentication Navbar
* ✔ Customer Logout
* ✔ End-to-End Authentication Flow
* ✔ End-to-End Frontend & Backend Catalog    Integration
* ✔ Authentication UI
* ✔ Auth Context
* ✔ Persistent Login
* ✔ Dynamic Navbar Authentication
* ✔ Customer Profile Page
* ✔ Protected Profile Route
* ✔ Logout Functionality


---

# Completed Phases (Frontend Continuation of Backend - 8 Phases)

## Phase 1 — Homepage

* Responsive Navbar
* Hero
* Categories Preview
* Featured Products
* Why Choose Us
* Testimonials
* Footer

---

## Phase 2 — Product Catalog

* Product Catalog
* Live Search
* Category Filtering
* Product Counter
* Empty State
* Dynamic Category Navigation

---

## Phase 3 — Customer Pages

* ✔ Categories Page
* ✔ About Page
* ✔ Contact Page
* ✔ Enhanced Product Data Model

---

## Phase 4 — Product Details Page

* Dynamic product routing
* Product slug navigation
* Product details display
* Ingredients section
* Shelf life information
* Made-to-order workflow display
* Responsive product layout
* Future API-ready architecture

---

## Phase 5 — Backend Integration

* Connected Products page with Product API
* Connected Categories page with Category API
* Connected Product Details page with Product API
* Replaced static constants with backend data
* Connected Featured Products section with Featured Products API
* Dynamic product search and category filtering
* Authentication Context integration
* Customer Registration UI
* Customer Login UI
* JWT Authentication using HttpOnly Cookies
* Persistent Login after Page Refresh
* Protected Profile API integration
* Dynamic Navbar based on authentication state
* Customer Logout
* End-to-end frontend and backend integration (Authentication & Catalog)

---

# Upcoming Roadmap

## Phase 6 — Customer Features

* Customer Dashboard
* Profile Page
* Shopping Cart UI
* Cart API Integration
* Checkout Flow
* Razorpay Checkout Integration
* Order History
* Profile Management
* Address Management

---

## Phase 7 — Admin Dashboard

* Admin Login
* Dashboard Overview
* Product Management (CRUD)
* Category Management (CRUD)
* Order Management
* Customer Management
* Image Upload Integration

---

## Phase 8 — Deployment & Production

* Cloudinary Integration
* Frontend Deployment (Vercel)
* Backend Deployment (Render)
* Production Environment Configuration
* Custom Domain
* SSL Configuration
* Logging & Monitoring
* API Rate Limiting
* Performance Optimization
* Backup & Recovery Strategy
