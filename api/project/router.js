const express = require('express')
const { validateProject } = require('../middleware.js');
const Projects = require('./model.js');

const router = express.Router();

router.post('/', validateProject, async (req, res) => {
    const newProject = await Projects.addProject(req.body);
    const { project_completed } = newProject;
    if (!project_completed) {
        newProject.project_completed = false;
    } else if (project_completed === 1) {
        newProject.project_completed = true;
    }
    res.json(newProject);
})

router.get('/', async (req, res) => {
    const projects = await Projects.getAll();
    res.json(projects);
})

module.exports = router;