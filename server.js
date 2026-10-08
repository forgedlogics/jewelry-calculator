const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const priceCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/metal-price/:symbol', async (req, res) => {
  const symbol = req.params.symbol?.toUpperCase();
  const allowedSymbols = new Set(['XAU', 'XAG', 'XPT']);

  if (!allowedSymbols.has(symbol)) {
    return res.status(400).json({ error: 'Unsupported metal symbol' });
  }

  const cached = priceCache.get(symbol);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
    return res.json({ ...cached.data, cached: true });
  }

  try {
    const response = await fetch(`https://api.gold-api.com/price/${symbol}`, {
      signal: AbortSignal.timeout(8000),
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();

    if (!response.ok || !Number.isFinite(data.price)) {
      return res.status(502).json({ error: 'Live metal price unavailable' });
    }

    const payload = {
      symbol: data.symbol || symbol,
      name: data.name,
      price: data.price,
      currency: data.currency || 'USD',
      updatedAt: data.updatedAt || new Date().toISOString(),
      updatedAtReadable: data.updatedAtReadable,
      source: 'gold-api.com',
      cached: false
    };
    priceCache.set(symbol, { data: payload, cachedAt: Date.now() });
    res.json(payload);
  } catch (err) {
    if (cached) {
      return res.json({ ...cached.data, cached: true, stale: true });
    }
    res.status(502).json({ error: 'Live metal price unavailable. Enter a supplier price manually.' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'jewelry-pricing-calculator' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
