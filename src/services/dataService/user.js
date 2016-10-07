const {User} = require('./db')

function findUsers() {
	return User.findAll()
}

function getUser(id) {
  return User.findOne({
    where: {id},
  })
}

function createUser(data) {
	return User.create(data)
}

function updateUser(id, data) {
	return User.update(data, {where: {id}, returning: true})
		.then(updates => {
			const [numUpdated, updatedUsers] = updates
			return updatedUsers[0]
		})
}

function deleteUser(id) {
	return User.destroy({where: {id}})
		.then(updates => {
			return null
		})
}


module.exports = {
	findUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
}