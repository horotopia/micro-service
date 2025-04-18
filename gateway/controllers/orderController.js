import axios from 'axios';

const ORDER_URL = 'http://commande:3002';

export const getOrders = async (req, res, next) => {
    console.log('GET /orders called');
    try {
        const response = await axios.get(`${ORDER_URL}/orders`);
        res.json(response.data);
    } catch (error) {
        console.error('Error in getOrders:', error);
        next(error);
    }
};

export const getOrderById = async (req, res, next) => {
    try {
        const response = await axios.get(`${ORDER_URL}/orders/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
};

export const createOrder = async (req, res, next) => {
    try {
        const response = await axios.post(`${ORDER_URL}/orders`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};
