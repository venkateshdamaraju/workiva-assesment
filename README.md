
# Angular Product App

This Angular application is developed for a technical assessment. The app displays a list of products in a table, allows viewing product details, and demonstrates using standalone components, routing, and services.

---

## Project Structure & Component Overview

```
src/
  app/
    app.component.ts           # Root component with header, footer, and router-outlet
    app.component.html         # Layout with navbar and footer
    app.routes.ts              # Defines routing for product list, detail, and test card
    main.ts                    # Bootstrap file using standalone Angular setup
    products/                  # Application logic entirely defined in Products directory
      product.model.ts         # Interface defining Product structure
      product.service.ts       # Service that fetches data from products.json
      product-list/
        product-list.component.ts   # Displays list of products in table form
        product-list.component.html
      product-detail/
        product-detail.component.ts # Displays a detailed view of a single product
        product-detail.component.html
      product-card/
        product-card.component.ts   # Reusable component for displaying product summary
        product-card.component.html
assets/
  products.json                # JSON file with all product data
  mbp.jpg                      # Images referenced by products to display in product-detail web page
```

---

## How It Works

- On load, the app redirects from `/` to `/products`.
- The **ProductListComponent** fetches and displays products in a responsive styled table.
- Each row in the table is clickable and by clicking it navigates to `/products/:id`, handled by **ProductDetailComponent**, which shows:
  - Name, price, description, stock status, and rating with stars.
- **ProductCardComponent** is reusable, used for unit display (and separately testable via `/test-card`).
- All data is loaded from `assets/products.json` using `HttpClient`.

---

## Installation & Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/venkateshdamaraju/workiva-assesment.git
cd workiva-assesment/product-app
```

### 2. Install Angular

```bash
npm install -g @angular/cli@latest
```

### 3. Install Dependencies

```bash
npm install
```

This will install Angular core packages and additional libraries like:
- **Bootstrap** (for layout and UI)
- **Bootstrap Icons** (for rating stars)

### 4. Add Bootstrap & Icons (if not already in `angular.json`)

Ensure `angular.json` includes:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.css"
]
```

Or add via CLI:

```bash
npm install bootstrap bootstrap-icons
```

### 5. Run the Application

```bash
ng serve
```

Then visit:
```
http://localhost:4200
```

You will be redirected to `/products`.

---

##  Routes

| Route          | Description                             |
|----------------|-----------------------------------------|
| `/products`    | Product list view                       |
| `/products/:id`| Detail page for selected product         |
| `/test-card`   | Test route for the reusable card component |

---
