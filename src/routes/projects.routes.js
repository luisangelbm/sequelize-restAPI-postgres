const { Router } = require("express");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} = require("../controllers/projects.controllers");

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

//de projects quiero ver por ID, sus tareas
router.get("/:id/tasks", getProjectTasks);

module.exports = router;
