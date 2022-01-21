const db = require('../../data/dbConfig.js');

async function getAll() {
    const tasks = await db('tasks');

    console.log(tasks);
    return tasks;
}

module.exports = { getAll }