const express = require('express')
const { validateTask } = require('../middleware.js');
const Tasks = require('./model.js');

const router = express.Router();

router.post('/', validateTask, async (req, res) => {
    const newTask = await Tasks.addTask(req.body);

    const { task_completed } = newTask;

    if (!task_completed) {
        newTask.task_completed = false;
    } else if (task_completed === 1) {
        newTask.task_completed = true;
    }

    res.status(201).json(newTask);
})

router.get('/', async (req, res) => {
    const tasks = await Tasks.getAll();
    res.json(tasks);
})


module.exports = router;