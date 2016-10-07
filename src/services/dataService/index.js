const {List} = require('./db')
const listItems = require('./listItems')

function findLists() {
  return List.findAll()
}

function getList(id) {
  return List.findOne({
    where: {id},
  })
}

function createList(data) {
  return List.create(data)
}

function updateList(id, data) {
  return getList(id).then(list => {
    return list.update(data)
  })
}

function deleteList(id) {
  //find the list by id
  return getList(id).then(list => {
    //delete the mufuka
    return list.destroy()
  })
}

module.exports = {
  findLists,
  getList,
  createList,
  updateList,
  deleteList,
}, listItems)
