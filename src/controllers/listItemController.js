const dataService = require('../services/dataService')

function findListItems(req, res, next) {
  dataService.findListItems()
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function createListItem(req, res, next) {
  dataService.createListItem(req.body)
    .then(listsItem => {
      res.status(201).json(listsItem)
    })
    .catch(next)
}

function getListItem(req, res, next) {
  dataService.getListItem(req.params.itemId)
    .then(listItems => {
      res.status(200).send(listItems)
    })
    .catch(next)
}

function updateListItem(req, res, next) {
  dataService.updateListItem(req.params.itemId, req.body)
    .then(listsItem => {
      res.status(200).json(listsItem)
    })
    .catch(next)
}

function deleteListItem(req, res, next) {
  dataService.deleteListItem(req.params.itemId)
    .then(listsItem => {
      res.status(204).send()
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
