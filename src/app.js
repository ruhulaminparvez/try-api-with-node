const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const defaultRoutes = require('./routes/defaultRoutes');
const connectDB = require('./config/database');

// Connect to MongoDB
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API Routes
app.use('/', defaultRoutes);
app.use('/user', userRoutes);

module.exports = app;