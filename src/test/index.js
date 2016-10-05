const test = require('tape')
const tapSpec = require('tap-spec')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

module.exports = test
