const router = require("express").Router();
const taskController = require("./controllers/taskController");

router.get("/tasks", taskController.getAll);

module.exports = router;
