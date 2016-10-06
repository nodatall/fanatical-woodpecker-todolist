const dataService = require('src/services/dataService')

function findLists(req, res, next) {
  dataService.findLists()
    .then(lists => {
      res.status(200).json(lists)
    })
    .catch(next)
}

function getList(req, res, next) {
  const {listId} = req.params
  dataService.getList(listId)
    .then(list => {
      if (!list) {
        res.status(404).send('Not found')
        return
      }
      res.status(200).json(list)
    })
    .catch(next)
}

function createList(req, res, next) {
  dataService.createList(req.body)
  .then(list => {
    res.status(200).json(list)
  })
  .catch(next)

}

function updateList(req, res, next) {
  dataService.updateList(req.params.listId, req.body)
  .then(lists => {
    res.status(200).json(lists)
  })
  .catch(next)

}

function deleteList(req, res, next) {
  dataService.deleteList(req.params.listId)
  .then(lists => {
    res.status(204).send()
  })
  .catch(next)
}

module.exports = {
  findLists,
  getList,
  createList,
  updateList,
  deleteList,
}
