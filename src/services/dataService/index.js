const lists = require('./lists')
const listItems = require('./listItems')
const user = require('./user')
const {sync, reset} = require('./db')

module.exports = Object.assign({sync, reset}, lists, listItems, user)
