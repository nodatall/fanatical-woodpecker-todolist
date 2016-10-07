/** wires the express routes to request handlers (controllers) */
const express = require('express')
const router = express()

const userController = require('./controllers/userController')
const listController = require('./controllers/listController')
const listItemController = require('./controllers/listItemController')

// router.get('/users', userController.findUsers)
// router.post('/users', userController.createUser)
// router.get('/users/:userId', userController.getUser)
// router.put('/users/:userId', userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

router.get('/lists', listController.findLists)
router.post('/lists', listController.createList)
router.get('/lists/:listId', listController.getList)
router.put('/lists/:listId', listController.updateList)
router.delete('/lists/:listId', listController.deleteList)

router.get('/items', listItemController.findListsItem)
router.post('/items', listItemController.createListItem)
router.get('/items/:itemId', listItemController.getListItem)
router.put('/items/:itemId', listItemController.updateListItem)
router.delete('/items/:itemId', listItemController.deleteListItem)

module.exports = router
