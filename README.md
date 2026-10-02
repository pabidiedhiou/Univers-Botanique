# Univers-Botanique

A React learning project for browsing a small plant catalog. The interface displays plants with prices and care indicators, lets visitors filter by category, and keeps a shopping cart with quantities and a total in CFA francs.

## Features

- Plant catalog with light and watering indicators
- Category filter and reset button
- Add-to-cart action, item quantities, cart total, and clear-cart button
- Cart panel that can be opened or closed
- Email input with a basic `@` check when focus leaves the field

The plant data is stored locally in the frontend. This is a demonstration interface: the repository does not implement checkout, payments, orders, or email submission.

## Run locally

With Node.js and npm installed:

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser. `npm run build` creates a production bundle.

## Background

I built this as a React course exercise to practice components, props, state, filtering, and cart interactions. The interface uses the “La maison Jungle” name in its banner.
