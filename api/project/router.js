const express = require('express')
const { validateProject } = require('../middleware.js');
const Projects = require('./model.js');

const router = express.Router();

router.post('/', validateProject, (req, res) => {
    res.json({ message: 'posting a project' });
})

router.get('/', async (req, res) => {
    const projects = await Projects.getAll();
    res.json(projects);
})

module.exports = router;