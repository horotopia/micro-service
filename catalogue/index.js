import express from 'express';
import productRoutes from './routes/productRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Catalogue service running on port 3001');
});
