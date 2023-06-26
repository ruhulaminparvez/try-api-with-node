const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Define User Related Routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;