const {getUser} = require('../services/dataService')
const config = require('../config')

module.exports = () => {
  return (req, res, next) => {
    const userId = req.cookies[config.auth.cookieName]

    getUser(userId)
      .then(user => {
        if (user) {
          req.user = user
        }
        next()
      })
      .catch(next)
  }
}
