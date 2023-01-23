const router = require("express").Router();
const taskController = require("./controllers/taskController");
const tasksMiddlewares = require("./middlewares/taskMiddleware");

router.get("/tasks", taskController.getAll);
router.post(
    "/tasks",
    tasksMiddlewares.validateTitle,
    taskController.createTask
);
router.delete("/tasks/:id", taskController.deleteTask);
router.put(
    "/tasks/:id",
    tasksMiddlewares.validateTitle,
    tasksMiddlewares.validateStatus,
    taskController.updateTask
);

module.exports = router;
