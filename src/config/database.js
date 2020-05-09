const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});