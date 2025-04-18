// Simule une base de données en mémoire
let products = [
  { id: 1, name: 'iPhone 14', price: 999 },
  { id: 2, name: 'Samsung Galaxy S23', price: 899 },
  { id: 3, name: 'AirPods Pro', price: 249 },
  { id: 4, name: 'MacBook Pro 16"', price: 2799 },
  { id: 5, name: 'Dell XPS 13', price: 1299 },
  { id: 6, name: 'iPad Pro 12.9"', price: 1199 },
  { id: 7, name: 'Apple Watch Series 8', price: 499 },
  { id: 8, name: 'Sony WH-1000XM5', price: 399 },
  { id: 9, name: 'Google Pixel 7', price: 649 },
  { id: 10, name: 'Nintendo Switch OLED', price: 349 }
];

export const getAllProducts = () => products;

export const getProductById = (id) => products.find(p => p.id === id);

export const addProduct = (product) => {
  const newProduct = { id: products.length + 1, ...product };
  products.push(newProduct);
  return newProduct;
};
