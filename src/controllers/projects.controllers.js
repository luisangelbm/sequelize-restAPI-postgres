const { Task } = require("../models/Task");
const { Project } = require("./../models/Projects");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    // console.log(projects);
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const oneProject = await Project.findOne({
      where: {
        id,
      },
    });

    if (!oneProject)
      return res.status(404).json({ message: "Project doesn't exists" });
    res.json(oneProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, description, priority } = req.body;
  try {
    const newProject = await Project.create({ name, description, priority });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const updateProject = await Project.findByPk(id);
    updateProject.name = name;
    updateProject.priority = priority;
    updateProject.description = description;

    await updateProject.save();
    res.json(updateProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProject = await Project.destroy({
      where: {
        id,
      },
    });
    console.log(deleteProject);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findAll({
    where: { projectId: id },
  });
  res.json(tasks);
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjectTasks,
};
