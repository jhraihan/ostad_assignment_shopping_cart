# React Shopping Cart

A responsive shopping cart application built with React and Vite. It displays products in a grid, lets users add them to a cart, adjust quantities, remove items, and view a running subtotal — all powered by React hooks with no external state library.

## Features

- Product grid with image, name, category, and price
- Add products to the cart
- Increase / decrease item quantity
- Remove items from the cart
- Live cart item count and subtotal
- Responsive layout for desktop and mobile

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- Plain CSS (component-scoped stylesheets)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
git clone https://github.com/<your-username>/shopping-cart.git
cd shopping-cart
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Top navigation bar with search and cart icon
│   ├── ProductGrid.jsx    # Renders the list of ProductCard components
│   ├── ProductCard.jsx    # Single product display with Add to Cart action
│   ├── Cart.jsx           # Slide-in cart drawer with subtotal
│   ├── CartItem.jsx       # Single cart line item with quantity controls
│   └── Footer.jsx         # Site footer
├── data/
│   └── products.js        # Static product catalog
├── App.jsx                # Application state and cart logic
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## State Management

Cart state is managed in `App.jsx` using the `useState` hook and passed down to child components via props:

- `addToCart` — adds a product or increments its quantity if already in the cart
- `increaseQuantity` / `decreaseQuantity` — adjusts an item's quantity, removing it when it reaches zero
- `removeFromCart` — removes an item entirely
- `totalItems` / `subtotal` — derived values recalculated on every render

## License

This project is open source and available under the [MIT License](LICENSE).
