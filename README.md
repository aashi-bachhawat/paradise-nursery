# Paradise Nursery Shopping Application

## Project Overview

Paradise Nursery is a dynamic e-commerce web application built with React and Redux Toolkit that allows users to browse and purchase a wide variety of houseplants online.

## Features

- **Landing Page** — Welcoming home page with company name and a "Get Started" button
- **Product Listing Page** — Browse 18+ unique houseplants grouped into 3 categories
- **Shopping Cart** — Fully functional cart with quantity management and cost calculation
- **Navbar** — Responsive navigation with dynamic cart item count
- **Redux State Management** — Centralized cart state using Redux Toolkit

## Plant Categories

1. **Air Purifying Plants** — Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera
2. **Low Light Plants** — ZZ Plant, Pothos, Cast Iron Plant, Chinese Evergreen, Dracaena, Philodendron
3. **Flowering Plants** — Orchid, African Violet, Anthurium, Bromeliad, Kalanchoe, Begonia

## Tech Stack

- **React 18** — UI library
- **Redux Toolkit** — State management
- **React Redux** — React bindings for Redux
- **React Router DOM** — Client-side routing
- **Vite** — Build tool

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── store/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   ├── AboutUs.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── CartItem.jsx
│   ├── ProductList.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## About

Paradise Nursery was founded with a passion for bringing the beauty and benefits of nature into every home. We believe that plants are more than just decorations — they're living companions that improve air quality, boost mood, and transform spaces into sanctuaries.