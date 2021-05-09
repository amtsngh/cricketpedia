const Sequelize = require('sequelize');

const sequelize = new Sequelize('cricketpedia', 'root', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false,
  operatorsAliases: false,
});

sequelize.authenticate();

const Url = sequelize.define('Url', {
  hash: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  longUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numLogs: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Url;