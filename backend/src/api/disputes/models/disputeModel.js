const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Dispute = sequelize.define('Dispute', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  projectId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Resolved', 'Rejected'),
    defaultValue: 'Pending',
  },
});

module.exports = Dispute;