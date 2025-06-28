const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/myapidata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema and model
const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', itemSchema);

// GET all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// ✅ GET item by ID (THIS IS MISSING IN YOUR ERROR)
app.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST item
app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// PUT (Update) item
app.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// DELETE item
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send('Item deleted');
});

// Server listen
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

