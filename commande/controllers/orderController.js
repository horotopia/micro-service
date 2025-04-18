import { getAllOrders, getOrderById, addOrder } from '../models/orderModel.js';
import axios from 'axios';

export const getOrders = async (req, res, next) => {
  console.log('GET /orders called');
  try {
    const { data: products } = await axios.get('http://catalogue:3001/products');
    const orders = getAllOrders(products);
    res.json(orders);
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
