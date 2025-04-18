// Simule une base de données en mémoire
let orders = [
  { id: 1, products: [ { id: 1 } ], status: 'pending' },
  { id: 2, products: [ { id: 3 } ], status: 'shipped' },
  { id: 3, products: [ { id: 2 } ], status: 'pending' },
  { id: 4, products: [ { id: 5 } ], status: 'delivered' },
  { id: 5, products: [ { id: 4 } ], status: 'pending' },
  { id: 6, products: [ { id: 7 } ], status: 'shipped' },
  { id: 7, products: [ { id: 6 } ], status: 'pending' },
  { id: 8, products: [ { id: 8 },{ id:5 } ], status: 'delivered' },
  { id: 9, products: [ { id: 9 } ], status: 'pending' },
  { id: 10, products: [ { id: 10 } ], status: 'pending' }
];

export const getAllOrders = (products) => orders.map(order => ({
  ...order,
  products: order.productIds
    ? order.productIds.map(id => products.find(p => p.id === id)).filter(Boolean)
    : []
}));

export const getOrderById = (id) => orders.find(o => o.id === id);

export const addOrder = (order) => {
  const newOrder = { id: orders.length + 1, ...order, status: 'pending' };
  orders.push(newOrder);
  return newOrder;
};
