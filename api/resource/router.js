const express = require('express')
const { validateResource } = require('../middleware.js');
const Resources = require('./model.js');

const router = express.Router();

router.post('/', validateResource, async (req, res) => {
    const newResource = await Resources.addResource(req.body);
    res.status(201).json(newResource);
})

router.get('/', async (req, res) => {
    const resources = await Resources.getAll();
    res.json(resources);
})

module.exports = router;