const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const defaultRoutes = require('./routes/defaultRoutes');

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API Routes
app.use('/', defaultRoutes);
app.use('/users', userRoutes);

module.exports = app;