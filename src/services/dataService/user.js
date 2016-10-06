const {User} = require('./db')

// function findUsers() {
// 	return User.findAll()
// }

// function getUser(id) {
//   return User.findOne({
//     where: {id},
//   })
// }

function createUser(name, email, passwordHash) {
	return User.create({
		name: name,
		email: email,
		passwordHash: passwordHash
	})
}

// function updateUser(id) {
// 	return User.findOne({
// 		where: {id},
// 	})
// }

// function deleteUser(id) {
// 	return User.findOne({
// 		where: {id},
// 	})
// }



module.exports = {
	// findUsers,
	// getUser,
	createUser,
	// updateUser,
	// deleteUser,
}