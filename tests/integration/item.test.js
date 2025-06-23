jest.setTimeout(30000); // Increase timeout

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../expressApp');
const Item = require('../../models/Item');

require('dotenv').config({ path: '.env.test' }); // Load test DB

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await Item.deleteMany(); // Clean up test data
  await mongoose.disconnect();
});

describe('Integration: /api/items', () => {
  it('should add and fetch items', async () => {
    const newItem = { name: 'Test Book', quantity: 2 };

    const postRes = await request(app).post('/api/items').send(newItem);
    expect(postRes.statusCode).toBe(201);

    const getRes = await request(app).get('/api/items');
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.length).toBeGreaterThan(0);
  });
});



