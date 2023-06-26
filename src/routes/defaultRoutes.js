const express = require('express');
const router = express.Router();

//Define Default Routes
router.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

module.exports = router;