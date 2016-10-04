const cookieParser = require('cookie-parser')
const express = require('express')

const config = require('./config')
const handleAuth = require('./middleware/auth')
const routes = require('./routes')

const app = express()

app.use(cookieParser())
app.use(handleAuth())

app.use(routes)

app.get('*', function (req, res) {
  res.status(500).send('Nah, son.')
})

app.listen(config.port, function () {
  console.log(`To Do app listening on port ${config.port}, hay!`)
})
