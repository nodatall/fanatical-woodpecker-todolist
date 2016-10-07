const {User, List} = require('./db')
const listItems = require('./listItems')

function getUser(id) {
  return User.findOne({
    where: {id},
  })
}

function findLists() {
  return List.findAll()
}

function getList(id) {
  return List.findOne({
    where: {id},
  })
}

module.exports = Object.assign({getUser, findLists, getList}, listItems)
