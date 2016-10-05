const {reset} = require('../services/dataService/db')

reset({cascade: true})
  .then(() => {
    console.log('Database reset complete')
    process.exit(0)
  })
  .catch(err => {
    console.error('Database reset error:', err)
    process.exit(1)
  })
