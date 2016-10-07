const Promise = require('bluebird')
const Sequelize = require('sequelize')

const config = require('src/config')

let db = new Sequelize(config.db.url, config.db.options)

const User = db.define('user', {
  name: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING, unique: true},
  passwordHash: {type: Sequelize.TEXT},
})

const List = db.define('list', {
  title: {type: Sequelize.STRING},
})
List.belongsTo(User)

const ListItem = db.define('listItem', {
  description: {type: Sequelize.TEXT},
  complete: {type: Sequelize.BOOLEAN, defaultValue: false}
})
ListItem.belongsTo(List)

function sync() {
  return db.sync()
}

function reset(options) {
  const models = [ListItem, List, User]
  return Promise.each(models, model => {
    return model.drop(options)
  }).then(() => {
    return sync()
  })
}

module.exports = {
  db,
  sync,
  reset,
  models: {
    User,
    List,
    ListItem,
  }
}
