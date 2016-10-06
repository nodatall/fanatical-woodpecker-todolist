const {ListItem} = require('./db')

function findListsItem(id) {
  return ListItem.findOne({
    where: {id},
  })
}

function createListsItem(description) {
  return ListItem.create({
    description: description
  })
}

function deleteListsItem(id) {
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

module.exports = {
  findListsItem,
  createListsItem,
  deleteListsItem,
  updateListItem
}
