const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Define User Related Routes
router.get('/', userController.getAllUsers);

module.exports = router;