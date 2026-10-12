# BenchMark Jewelry Pricing Calculator

A simple tool to turn your jewelry costs into a retail price and profit estimate.

[![Open browser preview](https://img.shields.io/badge/Open-Browser%20Preview-176B87?style=for-the-badge&logo=stackblitz&logoColor=white)](https://stackblitz.com/github/forgedlogics/jewelry-calculator)

> **Start here:** [Open the calculator in your browser →](https://stackblitz.com/github/forgedlogics/jewelry-calculator)
>
> The preview runs the current GitHub project online. Projects you save there stay in that browser; use the local setup below when you want your own hosted version.

## Quick start

1. [Open the browser preview](https://stackblitz.com/github/forgedlogics/jewelry-calculator).
2. In **Simple Mode**, name the piece, choose a metal, and enter its finished weight.
3. Add stone cost and bench labor.
4. Set your retail markup. The suggested retail price, expected profit, and margin update automatically.

That is enough for a quick estimate.

## When to use Advanced Tools

Choose **Show advanced tools** only when you need more detail:

- Import an STL or mesh-based 3DM / enter Rhino volume
- Refresh a live metal spot price
- Add CAD labor, parts, packaging, shipping, and overhead
- Calculate wholesale, expected discounts, card fees, and sales tax

## What the numbers mean

- **Production cost:** metal + materials + labor + fulfillment + overhead
- **Retail before tax:** your production cost plus retail markup
- **Estimated profit:** retail price minus production cost and payment fees
- **Margin:** what percentage of the retail price remains as profit

## Save and share

- **Save project:** keeps the estimate in this browser.
- **Duplicate:** makes a copy before testing another option.
- **Download quote:** creates a plain-text estimate you can send or save.

Projects are stored only in your browser. Clearing browser data removes them.

## Important

This is a planning calculator, not a final supplier quote. Before selling, confirm:

- Metal cost with your supplier
- Stone availability and price
- Production time
- Applicable tax

## Run it locally

```bash
npm install
npm start
```

Open the local address shown in the terminal (usually `http://localhost:3000`).

For deployment details, see [DEPLOYMENT.md](DEPLOYMENT.md).
