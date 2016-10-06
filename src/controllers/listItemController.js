const dataService = require('../services/dataService/listItemFunctions')

function findListsItem(req, res, next) {
  dataService.findListsItem()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function createListsItem(req, res, next) {
  dataService.createListsItem()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function deleteListsItem(req, res, next) {
  dataService.deleteListsItem()
    .then(listsItem => {
      res.status(200).send("Successfully deleted")
    })
    .catch(next)
}

function updateListItem(req, res, next) {
  dataService.updateListItem()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}


module.exports = {
  findListsItem,
  createListsItem,
  deleteListsItem,
  updateListItem
}
