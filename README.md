# BenchMark Jewelry Pricing Calculator

A simple tool to turn your jewelry costs into a retail price and profit estimate.

[![Open calculator](https://img.shields.io/badge/Open-Live%20Calculator-176B87?style=for-the-badge&logo=github&logoColor=white)](https://forgedlogics.github.io/jewelry-calculator/)

> **Start here:** [Open the calculator in your browser →](https://forgedlogics.github.io/jewelry-calculator/)
>
> Saved projects stay in your browser. Use **Use current metal price** for an approximate gold, silver, or platinum alloy cost, then confirm your supplier quote before selling.

## Quick start

1. [Open the calculator](https://forgedlogics.github.io/jewelry-calculator/).
2. In **Simple Mode**, name the piece, choose a metal, and enter its finished weight — or upload an STL / mesh-based 3DM to calculate an estimated weight automatically.
3. Add stone cost and bench labor.
4. Set your retail markup. The suggested retail price, expected profit, and margin update automatically.

That is enough for a quick estimate.

## When to use Advanced Tools

Choose **Show advanced tools** only when you need more detail:

- Import an STL or mesh-based 3DM / enter Rhino volume
- Refresh an approximate current metal price
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
