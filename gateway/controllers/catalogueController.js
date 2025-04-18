import axios from 'axios';

const CATALOGUE_URL = 'http://catalogue:3001';

export const getProducts = async (req, res, next) => {
    try {
        const response = await axios.get(`${CATALOGUE_URL}/products`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const response = await axios.get(`${CATALOGUE_URL}/products/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
};

export const createProduct = async (req, res, next) => {
    try {
        const response = await axios.post(`${CATALOGUE_URL}/products`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};
