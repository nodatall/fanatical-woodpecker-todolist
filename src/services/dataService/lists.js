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
    .then(updates => {
      const [numRowsUpdated, updatedLists] = updates
      return updatedLists[0]
    })
}

function deleteList(id) {
  return List.destroy({where: {id}}).then(() => null)
}

module.exports = {
  findLists,
  getList,
  createList,
  updateList,
  deleteList,
}
