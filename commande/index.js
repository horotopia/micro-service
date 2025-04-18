import express from 'express';
import orderRoutes from './routes/orderRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use('/orders', orderRoutes);
app.use(errorHandler);

app.listen(3002, () => {
  console.log('Order service running on port 3002');
});
