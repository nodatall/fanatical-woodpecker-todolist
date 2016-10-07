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
  return ListItem.destroy({
    where: {id},
  })
}

function updateListItem(id, data) {
  return getListItem(id).then(function (listItem) {
      return listItem.update(data)
  })
}



module.exports = {
  findListItems,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem,
}
