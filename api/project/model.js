const db = require('../../data/dbConfig.js');

// converting project_completed values to boolean values
function intToBoolean(array) {
    array.forEach(element => {
        const { project_completed } = element;
        if (!project_completed) {
            element.project_completed = false;
        } else if (project_completed === 1) {
            element.project_completed = true;
        }
    });
}

async function getAll() {
    const projects = await db('projects');
    intToBoolean(projects);
    return projects;
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first();
        })
}

module.exports = { getAll, addProject }