const {ListItem} = require('./db')

function findListItems(id) {
  return ListItem.findAll({
    where: {
    listId: id,
    },
  })
}

function createListItem(id, description) {
  return ListItem.create({
    description: description,
    listId: id,
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

function getListItem (id) {
  return ListItem.findOne({
    where: {id},
  })
}

module.exports = {
  findListItems,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem,
}
