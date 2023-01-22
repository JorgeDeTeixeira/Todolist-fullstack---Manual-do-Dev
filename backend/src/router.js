const router = require("express").Router();
const taskController = require("./controllers/taskController");
const tasksMiddlewares = require("./middlewares/taskMiddleware");

router.get("/tasks", taskController.getAll);
router.post("/tasks", tasksMiddlewares.validateBody, taskController.createTask);

module.exports = router;
