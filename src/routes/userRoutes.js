const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get All Users
router.get('/', userController.getAllUsers);

// Create User
router.post('/', userController.createUser);

module.exports = router;