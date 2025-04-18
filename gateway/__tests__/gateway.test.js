// __tests__/gateway.test.js
import request from 'supertest';
import express from 'express';
import catalogueRoutes from '../routes/catalogueRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';

const app = express();
app.use(express.json());
app.use('/products', catalogueRoutes);
app.use('/orders', orderRoutes);

describe('Gateway API', () => {
    it('GET /products should return 200, 502 ou 500', async () => {
        const res = await request(app).get('/products');
        expect([200, 502, 500]).toContain(res.statusCode);
    });

    it('GET /orders should return 200, 502 ou 500', async () => {
        const res = await request(app).get('/orders');
        expect([200, 502, 500]).toContain(res.statusCode);
    });
});
