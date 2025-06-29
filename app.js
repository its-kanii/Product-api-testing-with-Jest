require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'; 

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Compass'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});





