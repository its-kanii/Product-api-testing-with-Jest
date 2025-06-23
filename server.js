// server.js
require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const app = require('./expressApp'); // ← use the testable Express app
const PORT = process.env.PORT || 8000;

// Connect to MongoDB Atlas and start the server
mongoose.connect(process.env.MONGO_URI);
  then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
