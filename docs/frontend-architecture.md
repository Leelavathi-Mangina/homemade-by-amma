# Frontend Architecture

## Current Structure

```text
src/
└── app/
    ├── about/
    ├── categories/
    ├── contact/
    ├── products/
    │   └── page.js
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
├── products/
│   ├── PageHeader.jsx
│   ├── ProductToolbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   └── ProductGrid.jsx
└── ui/
    └── Button.jsx

constants/
├── navigation.js
├── categories.js
├── products.js
├── productCategories.js
├── features.js
└── testimonials.js
```

---

# Routing

- /
- /about
- /categories
- /products
- /contact

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

---

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

## Product Catalog

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

# Homepage Features

## Hero Section

- Responsive two-column layout
- Brand badge
- Main heading
- Business description
- Trust indicators
- Reusable CTA button
- Decorative image card

---

## Categories Preview

- Responsive category grid
- Reusable CategoryCard
- Data-driven rendering
- Centralized category data
- Premium hover animations

---

## Featured Products

- Responsive product grid
- Reusable ProductCard
- Data-driven rendering
- Category badge
- Product pricing
- View All Products button

---

## Why Choose Us

- Responsive feature grid
- Reusable FeatureCard
- Trust-focused business highlights
- Data-driven rendering

---

## Testimonials

- Responsive testimonial grid
- Reusable TestimonialCard
- Five-star ratings
- Decorative quotation styling

---

## Footer

- Three-column responsive layout
- Brand information
- Quick links
- Contact information
- Copyright section

---

# Product Catalog Features

## Products Page

- Dedicated Products page
- Reusable PageHeader
- Responsive layout

---

## Product Toolbar

- Live search
- Dynamic category dropdown
- Controlled components
- Clear Search button

---

## Product Grid

- Live filtering
- Product counter
- Empty state
- Responsive product cards
- Search + category filtering

---

# State Architecture

```text
ProductsPage
        │
        ▼
 search state
 category state
        │
        ├──────────────┐
        ▼              ▼
ProductToolbar    ProductGrid
```

State is lifted to the page component while child components remain reusable.

---

# Current Theme

- Poppins Typography
- Warm food-inspired palette
- Amber primary color
- Soft rounded corners
- Consistent spacing system
- Responsive layouts

---

# Reusable Components

- Button
- Navbar
- Desktop Navigation
- Mobile Navigation
- Footer
- FooterLinks
- FooterContact
- CategoryCard
- ProductCard
- FeatureCard
- TestimonialCard
- PageHeader
- ProductToolbar
- SearchBar
- CategoryFilter
- ProductGrid

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

PRODUCT_CATEGORIES
        │
        ▼
CategoryFilter

HOME_FEATURED_PRODUCTS
        │
        ▼
ProductGrid
        │
        ▼
ProductCard
```

UI components remain unchanged when data is later fetched from the backend API.

---

# Design Principles

- Mobile-first development
- Component-based architecture
- Reusable UI components
- Data-driven rendering
- Separation of UI and data
- Single responsibility principle
- Lifted state management
- Shared application layout

---

# Current Progress

- ✔ Next.js Setup
- ✔ Global Theme
- ✔ Component Architecture
- ✔ Responsive Navbar
- ✔ Mobile Navigation
- ✔ Shared Root Layout
- ✔ Homepage Completed
- ✔ Product Catalog Page
- ✔ Live Search
- ✔ Category Filtering
- ✔ Product Counter
- ✔ Clear Search
- ✔ Empty State
- ✔ Controlled Components
- ✔ State Lifting
- ✔ Data-driven UI Rendering

---

# Completed Milestones

## Phase 1 — Homepage

- Responsive Navbar
- Hero Section
- Categories Preview
- Featured Products
- Why Choose Us
- Testimonials
- Footer
- Homepage Completion

---

## Phase 2 — Product Catalog (Milestone 1)

- Product Catalog Page
- Product Toolbar
- Live Search
- Dynamic Category Filter
- Product Counter
- Clear Search
- Empty State
- Lifted State Architecture

---

# Next Milestone

## Phase 3

- Product Details Page
- Categories Page
- About Page
- Contact Page improvements
- Backend Integration
- Product Image Management
- Admin Dashboard
- Authentication