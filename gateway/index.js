import express from 'express';
import axios from 'axios';
import catalogueRoutes from './routes/catalogueRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use('/products', catalogueRoutes);
app.use('/orders', orderRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('API Gateway running on port 3000');
});
