const {User, List} = require('./db')

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

module.exports = {
  getUser,
  findLists,
  getList,
}
