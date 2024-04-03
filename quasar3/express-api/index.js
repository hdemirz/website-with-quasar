const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Ürün 1', price: 50 },
  { id: 2, name: 'Ürün 2', price: 30 },
  { id: 3, name: 'Ürün 3', price: 70 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Express API çalışıyor: http://localhost:${port}`);
});