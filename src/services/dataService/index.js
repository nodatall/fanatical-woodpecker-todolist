const {List} = require('./db')

function findLists() {
  return List.findAll()
}

function getList(id) {
  return List.findOne({
    where: {id},
  })
}

module.exports = {
  findLists,
  getList,
}
