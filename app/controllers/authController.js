const jwt = require('jsonwebtoken');

exports.getToken = (req, res) => {
    const payload = { username: 'user' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};