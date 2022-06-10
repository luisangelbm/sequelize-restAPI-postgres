const { Router } = require("express");
const { getTasks, createTasks, getTask, deleteTask, updateTask } = require("../controllers/tasks.controllers");

const router = Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id",deleteTask);

module.exports = router;
