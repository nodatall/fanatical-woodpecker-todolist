const dataService = require('src/services/dataService')

dataService.sync()
  .then(() => {
    console.log('Database sync complete')
    process.exit(0)
  })
  .catch(err => {
    console.error('Database sync error:', err)
    process.exit(1)
  })
