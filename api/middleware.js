const db = require('../data/dbConfig.js');

const validateProject = (req, res, next) => {
    const { project_name } = req.body;

    if (!project_name) {
        next(({ status: 400, message: 'Project name is required' }));
    } else {
        next();
    }
}

const validateResource = async (req, res, next) => {
    const { resource_name } = req.body;

    if (!resource_name) {
        next({ status: 400, message: 'Resource name is required' });
    }

    try {
        const existingResource = await db('resources')
            .where('resource_name', resource_name)
            .first();
        if (existingResource) {
            next({ status: 400, message: 'Resource name already exists' });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

const validateTask = async (req, res, next) => {
    const { task_description, project_id } = req.body;

    if (!task_description || !project_id) {
        next({ status: 400, message: 'Task description and project id are required' });
    }

    try {
        const validProjectId = await db('projects')
            .where('project_id', project_id)
            .first();
        if (!validProjectId) {
            next({ status: 400, message: 'Project id must point to an existing project' });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { validateProject, validateResource, validateTask };
  