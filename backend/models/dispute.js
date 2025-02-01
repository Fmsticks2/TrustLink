'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Dispute = sequelize.define('Dispute', {
    reason: DataTypes.TEXT,
    status: DataTypes.STRING,
  });

  Dispute.associate = (models) => {
    Dispute.belongsTo(models.Milestone, { foreignKey: 'milestoneId', as: 'milestone' });
  };

  return Dispute;
};