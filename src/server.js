const bodyParser = require('body-parser')
const express = require('express')

const config = require('src/config')
const routes = require('src/routes')

const dataService = require('src/services/dataService')

const app = express()

app.use(bodyParser.json())

app.use(routes)

app.get('*', function (req, res) {
  res.status(500).send('Nah, son. We can\'t find that.')
})

app.get(function (err, req, res, next) {
  console.error(err)
  res.status(500).send('Sorry, no bueno.')
})

console.log('Initializing db...')
dataService.sync().then(() => {
  app.listen(config.port, function () {
    console.log(`${config.appName} listening on port ${config.port}!`)
  })
})
