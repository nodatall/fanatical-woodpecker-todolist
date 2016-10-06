const dataService = require('../services/dataService/listItemFunctions')

function findListItem(req, res, next) {
  dataService.findListItem()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function createListItem(req, res, next) {
  dataService.createListItem()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function deleteListsItem(req, res, next) {
  dataService.deleteListsItem()
    .then(listsItem => {
      res.status(204).send("Successfully deleted")
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

function getListItem(req, res, next) {
  dataService.getListItem()
    .then(listItems => {
      res.status(200).send(listItems)
    })
    .catch(next)
}

module.exports = {
  findListItem,
  createListItem,
  deleteListsItem,
  updateListItem,
  getListItem
}
