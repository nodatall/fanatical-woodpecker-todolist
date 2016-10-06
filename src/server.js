const bodyParser = require('body-parser')
const express = require('express')

const config = require('./config')
const handleAuth = require('./middleware/auth')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())

app.use(routes)

app.get('*', function (req, res) {
  res.status(500).send('Nah, son.')
})

app.get(function (err, req, res, next) {
  console.error(err)
  res.status(500).send('Sorry, no bueno.')
})

app.listen(config.port, function () {
  console.log(`To Do app listening on port ${config.port}, hay!`)
})
