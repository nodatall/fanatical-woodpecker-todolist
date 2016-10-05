const Sequelize = require('sequelize')
const config = require('../../../config')

let db = new Sequelize(config.db.url, config.db.options)

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  passwordHash: {
    type: Sequelize.TEXT,
  },
})

const List = db.define('list', {
  title: {
    type: Sequelize.STRING,
  },
})
List.belongsTo(User)

const ListItem = db.define('listItem', {
  description: {
    type: Sequelize.TEXT,
  },
})
ListItem.belongsTo(List)

function sync() {
  return db.sync()
}

module.exports = {
  db,
  User,
  List,
  ListItem,
}
