const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('comment', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
