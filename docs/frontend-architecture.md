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
│   └── NavbarActions.jsx
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

## Routing

* /
* /about
* /categories
* /products
* /contact

---

## Shared Layout

```text
RootLayout
├── Navbar
├── Main
│   └── Current Page
└── (Footer - Planned)
```

---

## Component Hierarchy

### Navbar

```text
Navbar
├── Logo
├── DesktopNav
├── NavbarActions
├── MobileMenuButton
└── MobileMenu
```

### Homepage

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

---

## Hero Section

### Features Implemented

* Responsive two-column layout
* Brand badge
* Main heading
* Business description
* Trust indicators
* Reusable CTA button
* Responsive image placeholder
* Decorative image card

---

## Categories Preview Section

### Features Implemented

* Responsive category grid
* Reusable `CategoryCard` component
* Data-driven rendering using `.map()`
* Centralized category data in `constants/categories.js`
* Hover animations
* Premium card design
* Mobile-first responsive layout

---

## Featured Products Section

### Features Implemented

* Responsive product grid
* Reusable `ProductCard` component
* Data-driven rendering using `.map()`
* Centralized featured products data in `constants/products.js`
* Product category badge
* Product pricing
* Reusable CTA button
* View All Products button
* Premium hover animations
* Mobile-first responsive layout

---

## Why Choose Us Section

### Features Implemented

* Responsive feature grid
* Reusable `FeatureCard` component
* Data-driven rendering using `.map()`
* Centralized feature data in `constants/features.js`
* Trust-focused business highlights
* Premium hover animations
* Mobile-first responsive layout

---

## Testimonials Section

### Features Implemented

* Responsive testimonial grid
* Reusable `TestimonialCard` component
* Data-driven rendering using `.map()`
* Centralized testimonial data in `constants/testimonials.js`
* Customer reviews with decorative quotation styling
* Five-star rating display
* Premium hover animations
* Mobile-first responsive layout

---

## Current Theme

* Background
* Typography (Poppins)
* Primary Color
* Warm food-inspired color palette

---

## Reusable Components

* Button
* Navbar
* Desktop Navigation
* Mobile Navigation
* CategoryCard
* ProductCard
* FeatureCard
* TestimonialCard

---

## Data Architecture

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

This structure will later be replaced with backend API data without changing the UI components.

---

## Current Progress

* ✔ Next.js Setup
* ✔ Global Theme
* ✔ Component Architecture
* ✔ Responsive Navbar
* ✔ Mobile Navigation
* ✔ Application Routing
* ✔ Shared Root Layout
* ✔ Hero Section
* ✔ Reusable Button Component
* ✔ Categories Preview Section
* ✔ Reusable CategoryCard Component
* ✔ Featured Products Section
* ✔ Reusable ProductCard Component
* ✔ Why Choose Us Section
* ✔ Reusable FeatureCard Component
* ✔ Testimonials Section
* ✔ Reusable TestimonialCard Component
* ✔ Data-driven UI Rendering

---

## Completed Milestones

### Milestone 1

* ✔ Responsive Navbar
* ✔ Mobile Navigation
* ✔ Application Routing
* ✔ Shared Root Layout

### Milestone 2

* ✔ Hero Section
* ✔ Reusable Button Component

### Milestone 3

* ✔ Categories Preview Section
* ✔ Reusable CategoryCard Component

### Milestone 4

* ✔ Featured Products Section
* ✔ Reusable ProductCard Component

### Milestone 5

* ✔ Why Choose Us Section
* ✔ Reusable FeatureCard Component

### Milestone 6

* ✔ Testimonials Section
* ✔ Reusable TestimonialCard Component

---

## Next Milestone

* Footer
* Hero section with real product images
* Product listing page
* Backend integration for categories and products
