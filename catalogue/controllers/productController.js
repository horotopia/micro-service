import { getAllProducts, getProductById, addProduct } from '../models/productModel.js';

export const getProducts = (req, res, next) => {
  console.log('GET /products called');
  try {
    res.json(getAllProducts());
  } catch (err) {
    console.error('Error in getProducts:', err);
    next(err);
  }
};

export const getProduct = (req, res, next) => {
  try {
    const product = getProductById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const createProduct = (req, res, next) => {
  try {
    const newProduct = addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};
