const request = require('supertest');
const app = require('../../expressApp');

describe('API: /api/items', () => {
  it('should return 500 for POST with missing fields', async () => {
    const res = await request(app).post('/api/items').send({});
    expect(res.statusCode).toBe(500); // or 400 if you add validation
  });
});

