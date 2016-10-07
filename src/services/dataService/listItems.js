const {ListItem} = require('./db')

function findListItems() {
  return ListItem.findAll()
}

function createListItem(data) {
  return ListItem.create(data)
}

function getListItem(id) {
  return ListItem.findOne({
    where: {id},
  })
}

function deleteListItem(id) {
  return ListItem.destroy({where: {id}})
}

function updateListItem(id, data) {
  return ListItem.update(data, {where: {id}, returning: true})
    .then(updatedListItems => {
      const [numRows, updatedRows] = updatedListItems
      return updatedRows[0]
    })
}

module.exports = {
  findListItems,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem,
}
