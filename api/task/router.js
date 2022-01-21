const express = require('express')
const { validateTask } = require('../middleware.js');
const Tasks = require('./model.js');

const router = express.Router();

router.post('/', validateTask, (req, res) => {
    res.json({ message: 'posting a task' });
})

router.get('/', (req, res) => {
    res.json({ message: 'getting tasks' });
})


module.exports = router;