/** wires the express routes to request handlers (controllers) */
const express = require('express')
const router = express()

const userController = require('./controllers/userController')
const listController = require('./controllers/listController')

router.get('/lists', listController.findLists)
router.get('/lists/:listId', listController.getList)

module.exports = router
