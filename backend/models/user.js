'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Project, { foreignKey: 'userId', as: 'projects' });
  };

  return User;
};