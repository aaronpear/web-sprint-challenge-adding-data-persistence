const db = require('../../data/dbConfig.js');

async function getAll() {
    const resources = await db('resources');

    console.log(resources);
    return resources;
}

module.exports = { getAll }