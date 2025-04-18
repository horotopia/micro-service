// __tests__/commande.test.js
import request from 'supertest';
import express from 'express';
import orderRoutes from '../routes/orderRoutes.js';

const app = express();
app.use(express.json());
app.use('/orders', orderRoutes);

describe('Commande API', () => {
    it('GET /orders should return 200 and an array', async () => {
        const res = await request(app).get('/orders');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('POST /orders should add an order', async () => {
        const order = { products: [{ id: 1 }], status: 'pending' };
        const res = await request(app).post('/orders').send(order);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.status).toBe('pending');
    });

    it('GET /orders/:id should return an order', async () => {
        const res = await request(app).get('/orders/1');
        expect([200]).toContain(res.statusCode);
    });
});
