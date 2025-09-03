let cart = [];

function updateCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (${item.price} TL) x ${item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  document.getElementById('total').textContent = `Toplam: ${total} TL`;
}

function addToCart(product) {
  const exists = cart.find(item => item.id === product.id);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const productsDiv = document.getElementById('products');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Fiyat: ${product.price} TL</p>
        <button>Sepete Ekle</button>
      `;
      div.querySelector('button').onclick = () => addToCart(product);
      productsDiv.appendChild(div);
    });
  });

updateCart();