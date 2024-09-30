# GuitarPurchase 🎸🛒

GuitarPurchase is a simple yet powerful e-commerce app for browsing and purchasing guitars. This project leverages **React** and **TypeScript** to build a dynamic, type-safe, and interactive shopping cart system. It includes features like adding and removing items from the cart, adjusting quantities, and persisting cart data with `localStorage`.

## Key Features

- **Custom Hook for Cart State**:
  We manage the cart logic using a custom hook `useCart`. This hook centralizes all cart-related logic such as adding, removing, and modifying quantities of items, making it reusable across the app.

- **Persistent Cart**:
  The cart is saved in `localStorage` so that users don’t lose their items when the page is reloaded. This makes for a smooth user experience by maintaining the cart across browser sessions.

- **Responsive Design**:
  The app is mobile-friendly and adapts to different screen sizes, ensuring a seamless experience across all devices.

- **TypeScript for Type Safety**:
  All data is strictly typed, preventing potential bugs and ensuring better maintainability of the codebase.

## Project Structure

src/
│
├── components/
│   ├── App.tsx            # Main entry point for the app
│   ├── Header.tsx         # Displays cart and total
│   ├── Guitar.tsx         # Represents a guitar item
│
├── hooks/
│   └── useCart.tsx        # Custom hook for managing cart state
│
├── data/
│   └── db.ts              # Database of available guitars
│
└── types/
    └── types.ts           # TypeScript interfaces for Guitar and CartItem

## Deploy in Netlify

- [GuitarPurchase-app](https://guitarpurchase.netlify.app/) 