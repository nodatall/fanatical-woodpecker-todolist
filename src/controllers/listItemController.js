const dataService = require('../services/dataService/listItemFunctions')

function findListItems(req, res, next) {
  dataService.findListItems(req.id)
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function createListItem(req, res, next) {
  dataService.createListItem(req.id, req.description)
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function deleteListItem(req, res, next) {
  dataService.deleteListItem(req.id)
    .then(listsItem => {
      res.status(204).send("Successfully deleted")
    })
    .catch(next)
}

function updateListItem(req, res, next) {
  dataService.updateListItem(req.id, req.data)
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function getListItem(req, res, next) {
  dataService.getListItem(req.id)
    .then(listItems => {
      res.status(200).send(listItems)
    })
    .catch(next)
}

module.exports = {
  findListItems,
  createListItem,
  deleteListItem,
  updateListItem,
  getListItem
}
