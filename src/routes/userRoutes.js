const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', async (req, res) => {
    return authController.CreateUser(req, res);
});

router.post('/login', async (req, res) => {
    return authController.Login(req, res);
});

module.exports = router;