const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

const LINK_TARGET = path.resolve(__dirname, '../../src')
const LINK_PATH = path.resolve(__dirname, '../../node_modules/src')

console.log('Deleting symlink:', LINK_PATH)
rimraf.sync(LINK_PATH)

console.log('Creating symlink', LINK_PATH)
fs.symlinkSync(LINK_TARGET, LINK_PATH, 'dir')
