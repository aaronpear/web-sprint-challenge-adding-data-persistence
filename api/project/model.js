const db = require('../../data/dbConfig.js');

async function getAll() {
    const projects = await db('projects');

    // converting project_completed integers to boolean values
    projects.forEach(element => {
        const { project_completed } = element;
        if (!project_completed) {
            element.project_completed = false;
        } else if (project_completed === 1) {
            element.project_completed = true;
        }
    });
    console.log(projects);
    return projects;
}

module.exports = { getAll }