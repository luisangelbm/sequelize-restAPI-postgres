require('dotenv').config()
const projectsRoute = require("./routes/projects.routes");
const tasksRoute = require("./routes/tasks.routes");
const express = require("express");
const app = express();

// middlewares
app.use(express.json())

app.use("/projects", projectsRoute);
app.use("/tasks", tasksRoute);


module.exports = app;
