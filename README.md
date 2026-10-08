# BenchMark Jewelry Pricing Calculator

A browser-first studio tool for estimating jewelry production cost, wholesale pricing, retail pricing, margin, and quote totals. It is designed for real CAD-to-bench workflows: use an actual finished weight, calculate from Rhino volume, or scan a closed STL / mesh-based 3DM file.

## Quick Start

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser, or use the URL printed in the terminal.

## Features

- Detailed quote information: piece, client / collection, quantity, and notes
- CAD-aware metal cost: manual Rhino volume, STL / mesh-based 3DM scanning, or actual finished weight
- Live gold, silver, and platinum spot-price lookup with a safe manual-price fallback
- Separate materials, labor, packaging, shipping / fulfillment, casting buffer, and studio overhead
- Wholesale and retail pricing, expected discount, card-processing fee, sales-tax total, profit, and margin views
- Local project saving, duplication, deletion, and an on-demand plain-text quote download
- Responsive layout with no account or server-side project data required

## Storage

Projects are saved in browser `localStorage`. They stay on the same browser/device unless browser data is cleared. The app deliberately does not upload client names, pricing, or saved projects.

## Pricing note

Estimates support planning; verify supplier metal pricing, stone availability, labor time, and applicable sales tax before quoting or selling.

## Documentation

- [QUICKSTART.md](QUICKSTART.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
