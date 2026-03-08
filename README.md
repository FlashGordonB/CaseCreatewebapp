# ResinCase Studio (Local-First Demo)

Landing-page-based custom phone case storefront built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Local data only (no DB, no payments, no cart)

## Implemented Routes

- `/` landing page
- `/select-model` phone brand + model dropdown selection
- `/select-case` case type + conditional color selection
- `/summary` final configuration summary

## Flow and Data Strategy

The configurator uses URL query params:

- Example: `/select-case?model=iPhone%2016%20Pro%20Max`
- Example: `/summary?model=...&caseType=translucent&color=blue`

Why this approach:

- Local-first and database-free
- Easy to debug and share exact selections
- Works well with route guards and App Router server redirects
- Clean upgrade path to persisted cart/session data later

Route guards prevent invalid flows:

- `/select-case` redirects to `/select-model` if `model` is missing/invalid
- `/summary` redirects if required selections are missing/invalid

## Local Product Data

Configuration options are stored in:

- `lib/product-options.ts`

This includes:

- phone brands with model lists
- case types (`clear`, `translucent`, `silicon`)
- color options per case type

## Project Structure

```text
app/
  page.tsx                 # Landing page
  select-model/page.tsx    # Model selection
  select-case/page.tsx     # Case selection with route guard
  summary/page.tsx         # Summary with route guard
  layout.tsx               # App shell metadata/fonts
  globals.css              # Global theme styles

components/
  feature-highlights.tsx   # Landing feature cards
  phone-model-grid.tsx     # Model selection grid
  case-selection-form.tsx  # Client-side interactive case + color chooser

lib/
  product-options.ts       # Local product and option data
  selection.ts             # Query param parsing + validation helpers
```

## Install and Run

From project root:

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:3000`

Production build commands:

```bash
npm run build
npm run start
```

## Future Expansion Plan

### 1) Image Uploads

- Add an `/upload` (or extend `/summary`) step with file input + drag/drop.
- Store temporary uploads locally first:
  - client preview via object URL
  - optional server upload endpoint in `app/api/upload/route.ts`
- Later move to object storage (S3, Cloudinary, etc.) and persist file metadata.

### 2) Cart

- Create a `cart` data model (line items include model, caseType, color, designRef).
- Start with local persistence:
  - React context + `localStorage`
- Later migrate to server/session cart in DB.

### 3) Pricing

- Add a `pricing.ts` config with:
  - base price by case type
  - optional surcharges (premium print areas, rush processing, etc.)
- Centralize computation in a utility function used by summary/cart/checkout.

### 4) Shopify or Stripe Integration

- Stripe-first path:
  - create checkout session endpoint (`app/api/checkout/route.ts`)
  - map configurator selection to Stripe line items/metadata
- Shopify-first path:
  - create products/variants that represent selectable base case types
  - push custom selections as cart line item properties
- Keep current selection schema stable so either integration can be added with minimal refactor.

## Notes

- This project is intentionally local-first and mock-data driven.
- No payment processing, backend persistence, or real cart is included yet.
