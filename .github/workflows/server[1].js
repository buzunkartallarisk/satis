const express = require('express');
const app = express();
const port = 3000;

// Ürün listesi (örnek veri)
const products = [
  { id: 1, name: "Kahve Makinesi", price: 1500 },
  { id: 2, name: "Bluetooth Kulaklık", price: 400 },
  { id: 3, name: "Kitap", price: 60 }
];

app.use(express.static('public'));
app.use(express.json());

// Ürünleri gönder
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});