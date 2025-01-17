const express = require('express');
const { getToken } = require('../controllers/authController');

const router = express.Router();

router.get('/token', getToken);

module.exports = router;