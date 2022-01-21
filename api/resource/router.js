const express = require('express')
const { validateResource } = require('../middleware.js');
const Resources = require('./model.js');

const router = express.Router();

router.post('/', validateResource, (req, res) => {
    res.json({ message: 'posting a resource' });
})

router.get('/', (req, res) => {
    res.json({ message: 'getting resources' });
})

module.exports = router;