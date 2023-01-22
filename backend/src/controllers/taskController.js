const taskModel = require("../models/Task");

const getAll = async (req, res) => {
    const tasks = await taskModel.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await taskModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

module.exports = {
    getAll,
    createTask,
};
