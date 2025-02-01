'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });
    Project.hasMany(models.Milestone, { foreignKey: 'projectId', as: 'milestones' });
  };

  return Project;
};