import { getAllOrders, getOrderById, addOrder } from '../models/orderModel.js';
import axios from 'axios';

export const getOrders = async (req, res, next) => {
  console.log('GET /orders called');
  try {
    const orders = getAllOrders();
    console.log('Orders:', orders);
    const { data: products } = await axios.get('http://localhost:3001/products');
    const result = orders.map(order => {
      const product = products.find(p => p.id === order.product.id);
      return {
        id: order.id,
        product: product ? { id: product.id, name: product.name, price: product.price } : null,
        quantity: order.quantity,
        status: order.status
      };
    });
    res.json(result);
  } catch (err) {
    console.error('Error in getOrders:', err);
    next(err);
  }
};

export const getOrder = (req, res, next) => {
  try {
    const order = getOrderById(Number(req.params.id));
    if (!order) return res.status(404).json({ error: 'Commande non trouvée' });
    res.json(order);
  } catch (err) {
    next(err);
  }
};

export const createOrder = (req, res, next) => {
  try {
    const newOrder = addOrder(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
};
