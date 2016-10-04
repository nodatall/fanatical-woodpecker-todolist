const config = require('./config')
// const {sync} = require('./db')

const express = require('express')
const app = express()

app.get('*', function (req, res) {
  res.status(404).send('Nah, son.')
})

app.listen(config.port, function () {
  console.log(`To Do app listening on port ${config.port}, hay!`)
})
