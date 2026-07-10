# Phase 3 — Contact Page

## Objective

Build a business-focused Contact page that allows customers to enquire about homemade products, bulk orders, festival orders, and special occasions while preparing the frontend for future backend integration.

---

# Components Created

```text
components/contact/
├── ContactHero.jsx
├── ContactCards.jsx
├── ContactCard.jsx
├── BusinessHours.jsx
└── ContactForm.jsx
```

---

# Constants Created

```text
constants/
└── contact.js
```

---

# Page Structure

```text
ContactPage
├── ContactHero
├── ContactCards
│   └── ContactCard
├── Order Information
├── ContactForm
└── Footer
```

---

# Features Implemented

## Contact Hero

* Business-focused page heading
* Friendly customer introduction
* Encourages enquiries for homemade products
* Responsive layout

---

## Contact Information

Implemented using reusable **ContactCard** components.

Features:

* Phone information
* Email information
* Business location
* Data-driven rendering
* Responsive layout
* Premium hover animations

---

## Order Information

Instead of traditional business hours, the page explains the actual business workflow.

Customers are informed that:

* Every order is prepared fresh after confirmation.
* Bulk and festival orders should be placed in advance.
* Preparation starts only after order confirmation.
* Delivery schedule is confirmed after discussion.

This reflects the real operation of the homemade business.

---

## Contact Form

Designed to match the future backend API.

Fields include:

* Full Name
* Phone Number
* Email (Optional)
* Product / Occasion
* Message

Features:

* Backend-ready structure
* Responsive layout
* Shared Button component
* Consistent design system

---

# Reusable Components

* ContactCard
* ContactCards
* ContactForm

These components can later be reused for enquiry pages or future admin interfaces.

---

# Data Flow

```text
CONTACT_INFO
        │
        ▼
ContactCards
        │
        ▼
ContactCard
```

The form UI is intentionally independent of the backend so it can later connect directly to Express and MongoDB without redesigning the frontend.

---

# Design Principles Followed

* Mobile-first responsive design
* Component-based architecture
* Reusable UI components
* Data-driven rendering
* Separation of UI and data
* Backend-ready form structure
* Consistent design system

---

# Future Backend Integration

The Contact Form will later submit data using:

```text
Customer
      │
      ▼

Contact Form

      │
      ▼

POST /api/contact

      │
      ▼

Express Server

      │
      ▼

MongoDB

      │
      ▼

Admin Dashboard
```

No frontend redesign will be required during backend development.

---

# Outcome

The Contact page now:

* Provides multiple ways to contact the business.
* Clearly explains the homemade order process.
* Allows customers to submit enquiries.
* Supports bulk and special occasion orders.
* Is fully responsive and prepared for backend integration.

---

# Status

**Phase 3 — Contact Page:** ✅ Completed
