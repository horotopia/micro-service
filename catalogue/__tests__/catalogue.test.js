// __tests__/catalogue.test.js
import request from 'supertest';
import express from 'express';
import productRoutes from '../routes/productRoutes.js';

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

describe('Catalogue API', () => {
    it('GET /products should return 200 and an array', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('POST /products should add a product', async () => {
        const product = { name: 'Test Product', price: 99 };
        const res = await request(app).post('/products').send(product);
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject(product);
    });

    it('GET /products/:id should return a product', async () => {
        const res = await request(app).get('/products/1');
        expect([200, 404]).toContain(res.statusCode);
    });
});
