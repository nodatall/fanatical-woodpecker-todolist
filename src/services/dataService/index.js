const {User} = require('./db')

function getUser(userId) {
  return User.findOne({
    where: {id: userId},
  })
}

module.exports = {
  getUser,
}
