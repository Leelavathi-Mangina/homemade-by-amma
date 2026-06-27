# Frontend Architecture

## Current Structure

```text
src/
└── app/
    ├── about/
    ├── categories/
    ├── contact/
    ├── products/
    ├── globals.css
    ├── layout.js
    └── page.js

components/
├── common/
├── home/
│   ├── Hero.jsx
│   ├── CategoriesPreview.jsx
│   ├── CategoryCard.jsx
│   ├── FeaturedProducts.jsx
│   ├── ProductCard.jsx
│   ├── WhyChooseUs.jsx
│   ├── FeatureCard.jsx
│   ├── Testimonials.jsx
│   └── TestimonialCard.jsx
├── layout/
│   ├── Navbar.jsx
│   ├── DesktopNav.jsx
│   ├── MobileMenu.jsx
│   ├── MobileMenuButton.jsx
│   ├── NavbarActions.jsx
│   ├── Footer.jsx
│   ├── FooterLinks.jsx
│   └── FooterContact.jsx
└── ui/
    └── Button.jsx

constants/
├── navigation.js
├── categories.js
├── products.js
├── features.js
└── testimonials.js
```

---

# Routing

* /
* /about
* /categories
* /products
* /contact

---

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

## Navbar

```text
Navbar
├── Logo
├── DesktopNav
├── NavbarActions
├── MobileMenuButton
└── MobileMenu
```

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
└── Testimonials
    └── TestimonialCard
```

## Footer

```text
Footer
├── FooterLinks
└── FooterContact
```

---

# Hero Section

## Features Implemented

* Responsive two-column layout
* Brand badge
* Main heading
* Business description
* Trust indicators
* Reusable CTA button
* Responsive image placeholder
* Decorative image card

---

# Categories Preview Section

## Features Implemented

* Responsive category grid
* Reusable `CategoryCard`
* Data-driven rendering using `.map()`
* Centralized category data
* Premium hover animations
* Mobile-first responsive layout

---

# Featured Products Section

## Features Implemented

* Responsive product grid
* Reusable `ProductCard`
* Data-driven rendering
* Centralized product data
* Category badge
* Product pricing
* Reusable CTA button
* View All Products button
* Premium hover animations
* Mobile-first responsive layout

---

# Why Choose Us Section

## Features Implemented

* Responsive feature grid
* Reusable `FeatureCard`
* Data-driven rendering
* Centralized feature data
* Trust-focused business highlights
* Premium hover animations
* Mobile-first responsive layout

---

# Testimonials Section

## Features Implemented

* Responsive testimonial grid
* Reusable `TestimonialCard`
* Data-driven rendering
* Centralized testimonial data
* Five-star ratings
* Decorative quotation styling
* Premium hover animations
* Mobile-first responsive layout

---

# Footer

## Features Implemented

* Three-column responsive layout
* Brand information
* Quick navigation links
* Contact information
* Copyright section
* Shared layout integration
* Mobile-first responsive design

---

# Current Theme

* Poppins Typography
* Warm food-inspired color palette
* Amber primary color
* Soft rounded corners
* Consistent spacing system
* Responsive layout

---

# Reusable Components

* Button
* Navbar
* Desktop Navigation
* Mobile Navigation
* Footer
* FooterLinks
* FooterContact
* CategoryCard
* ProductCard
* FeatureCard
* TestimonialCard

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
```

The UI components remain unchanged when data is later fetched from the backend API.

---

# Design Principles

* Mobile-first development
* Component-based architecture
* Reusable UI components
* Data-driven rendering with `.map()`
* Separation of UI and data
* Consistent design system
* Clean folder organization
* Shared application layout

---

# Current Progress

* ✔ Next.js Setup
* ✔ Global Theme
* ✔ Component Architecture
* ✔ Responsive Navbar
* ✔ Mobile Navigation
* ✔ Application Routing
* ✔ Shared Root Layout
* ✔ Hero Section
* ✔ Categories Preview Section
* ✔ Featured Products Section
* ✔ Why Choose Us Section
* ✔ Testimonials Section
* ✔ Homepage Footer
* ✔ Reusable UI Components
* ✔ Data-driven UI Rendering
* ✔ Homepage Completed

---

# Completed Milestones

## Milestone 1

* Responsive Navbar
* Mobile Navigation
* Application Routing
* Shared Root Layout

## Milestone 2

* Hero Section
* Reusable Button

## Milestone 3

* Categories Preview
* Reusable CategoryCard

## Milestone 4

* Featured Products
* Reusable ProductCard

## Milestone 5

* Why Choose Us
* Reusable FeatureCard

## Milestone 6

* Testimonials
* Reusable TestimonialCard

## Milestone 7

* Footer
* Shared Footer Layout
* Homepage Completion

---

# Next Milestone (Phase 2)

* Product Catalog Page
* Product Details Page
* Category Filtering
* Search Functionality
* Backend Integration
* Product Image Management
* Admin Dashboard
* Authentication
