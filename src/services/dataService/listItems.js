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

function updateListItem(id, data) {
  return ListItem.update(data, {where: {id}, returning: true})
    .then(updates => {
      const [numRows, updatedListItems] = updates
      return updatedListItems[0]
    })
}

function deleteListItem(id) {
  return ListItem.destroy({where: {id}}).then(() => null)
}

module.exports = {
  findListItems,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem,
}
