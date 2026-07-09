# Phase 3 — About Page

## Objective

Build an About page that introduces **Homemade by Amma**, tells the family business story, explains the preparation process, highlights business values, builds customer trust, and encourages visitors to browse products.

---

# Components Created

```text
components/about/
├── AboutHero.jsx
├── OurStory.jsx
├── OurValues.jsx
├── ValueCard.jsx
├── PreparationProcess.jsx
├── ProcessCard.jsx
├── WhyTrustUs.jsx
├── TrustCard.jsx
└── AboutCTA.jsx
```

---

# Constants Created

```text
constants/
├── values.js
├── preparationProcess.js
└── trust.js
```

---

# Page Structure

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

# Features Implemented

## About Hero

* Business introduction
* Brand-focused heading
* Short business description
* Call-to-action button linking to Products page
* Responsive layout

---

## Our Story

* Introduces the family business
* Explains homemade preparation philosophy
* Highlights freshness and traditional recipes

---

## Our Values

Implemented using reusable **ValueCard** components.

Features:

* Data-driven rendering
* Responsive layout
* Centralized data in `values.js`
* Consistent card design

---

## Preparation Process

Implemented using reusable **ProcessCard** components.

Workflow:

1. Order Received
2. Fresh Preparation
3. Careful Packing
4. Ready for Delivery

Features:

* Data-driven rendering
* Order-based preparation process
* Responsive timeline/card layout

---

## Why Customers Trust Us

Implemented using reusable **TrustCard** components.

Highlights include:

* Freshly prepared after every order
* Quality ingredients
* Traditional recipes
* Hygienic preparation

Features:

* Data-driven rendering
* Responsive layout
* Premium card styling

---

## About CTA

* Encourages users to browse products
* Links directly to the Products page
* Uses the shared Button component
* Styled to match the brand color palette

---

# Reusable Components

* ValueCard
* ProcessCard
* TrustCard

These components can be reused elsewhere if similar content sections are needed.

---

# Design Principles Followed

* Mobile-first responsive design
* Component-based architecture
* Reusable UI components
* Data-driven rendering using `.map()`
* Separation of UI and data
* Consistent spacing and typography
* Shared design system

---

# Outcome

The About page now:

* Introduces the business professionally.
* Explains the homemade preparation process.
* Builds customer trust.
* Reinforces the brand values.
* Guides visitors toward browsing products.

The page is fully responsive, reusable, and ready for future backend integration if required.

---

# Status

**Phase 3 — About Page:** ✅ Completed
