// expressApp.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

module.exports = app;
