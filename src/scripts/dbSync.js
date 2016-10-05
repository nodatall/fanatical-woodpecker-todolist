const {db} = require('../services/dataService/db')

db.sync()
  .then(() => {
    console.log('Database sync complete')
    process.exit(0)
  })
  .catch(err => {
    console.error('Database sync error:', err)
    process.exit(1)
  })
