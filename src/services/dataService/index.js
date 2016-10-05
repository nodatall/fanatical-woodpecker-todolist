const {User, List} = require('./db')

function getUser(userId) {
  return User.findOne({
    where: {id: userId},
  })
}

function getList(userId) {
	return List.findOne({
		where: {id: userId},
	})
}

module.exports = {
  getUser,
  getList,
}

