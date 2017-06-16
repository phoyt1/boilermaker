const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('photo', {
  link: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});
