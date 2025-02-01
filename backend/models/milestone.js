'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define('Milestone', {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    proof: DataTypes.TEXT,
  });

  Milestone.associate = (models) => {
    Milestone.belongsTo(models.Project, { foreignKey: 'projectId', as: 'project' });
    Milestone.hasOne(models.Dispute, { foreignKey: 'milestoneId', as: 'dispute' });
  };

  return Milestone;
};