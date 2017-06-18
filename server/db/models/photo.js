const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('photo', {
  link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});
