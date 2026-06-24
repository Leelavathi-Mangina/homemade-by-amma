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
│   └── Hero.jsx
├── layout/
│   ├── Navbar.jsx
│   ├── DesktopNav.jsx
│   ├── MobileMenu.jsx
│   ├── MobileMenuButton.jsx
│   └── NavbarActions.jsx
└── ui/
    └── Button.jsx

constants/
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

```
RootLayout
├── Navbar
├── Main
│   └── Current Page
└── (Footer - Planned)
```

---

## Component Hierarchy

```
Navbar
├── Logo
├── DesktopNav
├── NavbarActions
├── MobileMenuButton
└── MobileMenu
```

---

## Hero Section

### Features Implemented

* Responsive two-column layout
* Brand label
* Main heading
* Business description
* Trust indicators
* Reusable CTA button
* Responsive image placeholder
* Decorative image card

---

## Current Theme

* Background
* Typography
* Primary Color

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

---

## Next Milestone

* Categories Preview Section
* Footer
* Hero Section polish with real product images
* Product listing page
