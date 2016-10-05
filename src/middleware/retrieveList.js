const {getList} = require('../services/dataService')

module.exports = () => {
	return (req, res, next) => {
		const userId = req.user

		getList(userId)
			.then(list => {
				if (list) {
					req.list = list
				}
				next()
			})
			.catch(next)
	}
}