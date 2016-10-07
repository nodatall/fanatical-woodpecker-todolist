const {List} = require('./db')

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
  return List.update(data, {where: {id}, returning: true})
    .then(updatedLists => {
      const [numRowsUpdated, updatedRows] = updatedLists
      return updatedRows[0]
    })
}

function deleteList(id) {
  return List.destroy({where: {id}})
}

module.exports = {
  findLists,
  getList,
  createList,
  updateList,
  deleteList,
}
