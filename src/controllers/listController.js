const dataService = require('../services/dataService')

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
  dataService.createList()

}




module.exports = {
  findLists,
  getList,
}
