const {ListItem} = require('./db')

function findListItem(id) {
  return ListItem.findOne({
    where: {id},
  })
}

function createListItem(description) {
  return ListItem.create({
    description: description
  })
}

function deleteListItem(id) {
  return ListItem.destroy({
    where: {id},
  })
}

function updateListItem(id, data) {
  return ListItem.findOne({
      where: {id},
    }).then(function (listItem) {
      return listItem.update(data)
  })
}

function getListItem (id) {
  return ListItem.findAll({
    where: {
    listId: id,
    },
  })
}

module.exports = {
  findListItem,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem,
}
