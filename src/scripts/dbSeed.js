const seedData = require('src/test/seedData')

seedData()
  .then(() => {
    console.log('Database seed complete')
    process.exit(0)
  })
  .catch(err => {
    console.error('Database seed error:', err)
    process.exit(1)
  })
