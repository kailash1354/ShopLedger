# ShopLedger

## Stack

- Node.js CommonJS application using Express 4 and body-parser.
- `server.js` serves `public/`, mounts `/api` routers, and renders HTML invoices.
- Persistence is the JSON file `data/db.json`, accessed through `lib/store.js`.

## Module map

- `routes/customers.js` — lists customers and records Khata settlements.
- `routes/orders.js` — lists, creates, retrieves, and cancels orders.
- `routes/products.js` — lists products and active coupons.
- `routes/reports.js` — dashboard, GST reconciliation, pricing preview, and admin export.
- `lib/coupons.js` — normalizes, validates, lists, and calculates coupon discounts.
- `lib/dates.js` — supplies today’s date and normalizes date keys.
- `lib/inventory.js` — finds products, checks stock, reserves/releases stock, and summarizes inventory.
- `lib/invoice.js` — computes printable invoice figures and renders printable HTML.
- `lib/ledger.js` — finds customers, charges/reverses Khata orders, and records settlements.
- `lib/orders.js` — adds, gets, cancels, and filters orders.
- `lib/pricing.js` — computes subtotals, coupon discounts, GST, and order totals.
- `lib/reports.js` — computes dashboard summaries and GST reconciliation results.
- `lib/store.js` — reads, writes, normalizes, and appends audit entries to the JSON store.
- `lib/tax.js` — resolves GST rates and splits GST into CGST and SGST.

## Commands

- Start the app: `node server.js` (or `npm start`).
- Run tests: `node --test`.

## Rules

1. Write characterization tests before changing behaviour.
2. Change only the module(s) the ticket is about.
3. Tests never read or write `data/db.json`; use in-memory data.
4. Add no dependencies.
5. Make the smallest fix that works.

## Current ticket

Invoice total and GST breakdown do not match what the customer was billed.
Allowed files: `lib/invoice.js` (`lib/tax.js` only if truly needed).
