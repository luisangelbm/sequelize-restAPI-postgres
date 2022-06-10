const { DataTypes } = require("sequelize");
const { sequelize } = require("./../database/database");
const { Task } = require("./Task");

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Task,{
  foreignKey: 'projectId',
  sourceKey: 'id'
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id'
})
module.exports = { Project };
