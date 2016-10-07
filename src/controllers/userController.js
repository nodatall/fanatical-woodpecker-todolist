const dataService = require('../services/dataService/user')

function findUsers(req, res, next) {
 dataService.findUsers()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(next)
}

function getUser(req, res, next) {
	dataService.getUser(req.params.userId)
	.then(user => {
		res.status(200).json(user)
	})
	.catch(next)
}

function createUser(req, res, next) {
	dataService.createUser(req.body)
	.then(user => {
		res.status(200).json(user)
	})
	.catch(next)
}

function updateUser(req, res, next) {
	dataService.updateUser(req.params.userId, req.body)
	.then(user => {
		res.status(200).json(user)
	})
	.catch(next)
}

function deleteUser(req, res, next) {
	dataService.deleteUser(req.params.userId)
	.then(user => {
		res.status(200).json(user)
	})
	.catch(next)	
}

module.exports = {
  findUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
