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
│   └── CategoryCard.jsx
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
└── categories.js
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
└── CategoriesPreview
    ├── CategoryCard
    ├── CategoryCard
    ├── CategoryCard
    └── CategoryCard
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

---

## Data Architecture

```text
HOME_CATEGORIES
        │
        ▼
CategoriesPreview
        │
        ▼
CategoryCard (Reusable)
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
* ✔ Data-driven UI Rendering

---

## Next Milestone

* Featured Products Section
* Footer
* Hero section with real product images
* Product listing page
* Backend integration for categories and products
