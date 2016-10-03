const Sequelize = require('sequelize')
const config = require('./config')

let ourDatabase = new Sequelize(config.db.url, config.db.options)

ourDatabase
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  })
