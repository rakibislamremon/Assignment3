const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/mainRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', mainRoutes);
app.use('/auth', authRoutes);

module.exports = app;