const db = require('../../data/dbConfig.js');

// converting project_completed values to boolean values
function intToBoolean(array) {
    array.forEach(element => {
        const { task_completed } = element;
        if (!task_completed) {
            element.task_completed = false;
        } else if (task_completed === 1) {
            element.task_completed = true;
        }
    });
}

async function getAll() {
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .groupBy('t.task_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description');
    intToBoolean(rows);

    return rows;
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(([task_id]) => {
            return db('tasks')
                .where('task_id', task_id)
                .first();
        })
}

module.exports = { getAll, addTask }