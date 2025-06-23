const request = require('supertest');

describe('Live API: Render', () => {
  it('should fetch items from deployed API', async () => {
    const res = await request('https://product-api-slik.onrender.com')
      .get('/api/items');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 30000); // 👈 Set timeout to 15 seconds
});

