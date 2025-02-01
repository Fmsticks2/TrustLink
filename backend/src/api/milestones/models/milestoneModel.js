const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Milestone = sequelize.define('Milestone', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Completed'),
    defaultValue: 'Pending',
  },
});

module.exports = Milestone;