const { Task } = require("./../models/Task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
    res.send("get tasks");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTasks = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({ name, done, projectId });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTask = await Task.findOne({
      where: { id },
      //   attributes: ["name"],
    });

    if (!oneTask)
      return res.status(404).json({ message: "Tasks doesn't exists" });
    res.json(oneTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, done, projectId } = req.body;
        const updateTask = await Task.findByPk(id);
        updateTask.name = name;
        updateTask.done = done;
        updateTask.projectId = projectId;

        await updateTask.save();
        res.json(updateTask);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.destroy({
      where: { id },
    });
    console.log(deleteTask);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getTask, getTasks, updateTask, deleteTask, createTasks };
