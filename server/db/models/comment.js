const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('comment', {
  text: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});
