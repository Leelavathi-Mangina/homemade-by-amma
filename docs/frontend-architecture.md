# Frontend Architecture

## Project Structure

```text
src/
└── app/
    ├── about/
    │   └── page.js
    ├── categories/
    │   └── page.js
    ├── contact/
    │   └── page.js
    ├── products/
    │   └── page.js
    ├── globals.css
    ├── layout.js
    └── page.js
```text
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
├── about/
│   ├── AboutHero.jsx
│   ├── OurStory.jsx
│   ├── OurValues.jsx
│   ├── ValueCard.jsx
│   ├── PreparationProcess.jsx
│   ├── ProcessCard.jsx
│   ├── WhyTrustUs.jsx
│   ├── TrustCard.jsx
│   └── AboutCTA.jsx
├── categories/
│   ├── CategoriesHero.jsx
│   ├── CategorySummary.jsx
│   └── CategoryGrid.jsx
├── contact/
│   ├── ContactHero.jsx
│   ├── ContactCards.jsx
│   ├── ContactCard.jsx
│   ├── BusinessHours.jsx
│   └── ContactForm.jsx
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
├── productCategories.js
├── products.js
├── features.js
├── testimonials.js
├── values.js
├── preparationProcess.js
├── trust.js
└── contact.js
```

```

---

# Routing

* /
* /products
* /categories
* /about
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

# Design Principles

* Mobile-first development
* Component-based architecture
* Reusable UI components
* Data-driven rendering
* Separation of UI and data
* Lifted state management
* Shared application layout
* Single Responsibility Principle (SRP)

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


---

# Completed Phases

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
* ⏳ Product Details Page


---

# Upcoming Roadmap

## Phase 4

* Enhance Product Data Model
* Product Details Page

## Phase 5

* Node.js
* Express.js
* MongoDB
* REST API Integration

## Phase 6

* Admin Dashboard
* Product Management
* Authentication
* Image Upload

## Phase 7

* Real Product Images
* WhatsApp Order Workflow
* Deployment
* Production Launch
