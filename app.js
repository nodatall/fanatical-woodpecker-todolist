const sequelize = require('sequelize')

let ourDatabase = new Sequelize('https://postgres.heroku.com/databases/fanatical-to-do-list-database')

console.log(ourDatabase)
