/** wires the express routes to request handlers (controllers) */
const express = require('express')
const router = express()

const userController = require('./controllers/userController')

router.get('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/', userController.home)

module.exports = router
