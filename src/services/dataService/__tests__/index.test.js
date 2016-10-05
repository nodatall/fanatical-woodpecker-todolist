const test = require('../../../test')
const {getUser, getList, findLists} = require('../../dataService')

test('Get user test', function (t) {
  t.plan(1)
  getUser(1).then(function (user) {
    t.equal(user.id, 1, 'Fuck yeah!' )
  })
})

test('Get list test', function (t) {
  t.plan(1)
  getList(2).then(function (list) {
    console.log("list title: ", list.title)
    t.equal(list.id, 2, "I want to have your baby")
  })
})

test('Find lists test', function (t) {
  t.plan(1)
  findLists().then(function (list) {
    console.log("I found your lists: ", list.id)
    t.equal(list.id, undefined, "Sounds good, homie")
  })
})
