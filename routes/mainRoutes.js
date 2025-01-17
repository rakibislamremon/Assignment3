const express = require('express');
const { getHelloWorld, postResponse } = require('../controllers/mainController');

const router = express.Router();

router.get('/hello', getHelloWorld);
router.post('/post', postResponse);

module.exports = router;