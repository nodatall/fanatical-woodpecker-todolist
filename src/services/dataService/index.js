const {User, List} = require('./db')
const listItems = require('./listItems')

function findLists() {
  return List.findAll()
}

function getList(id) {
  return List.findOne({
    where: {id},
  })
}

function createList(title) {
  return List.create({
    title: title,
  })
}

function updateList(id) {
  function getList(){
    return List.findOne({
      where: {id},
  }
  return List.update()
}

module.exports = Object.assign({
  findLists,
  getList,
  createList,
  updateList,
}, listItems)
