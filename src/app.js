const {sync} = require('./db')

sync()
  .then(() => {
    console.log('synced!')
  })
  .catch(err => {
    console.error('ruh roh:', error)
  })
