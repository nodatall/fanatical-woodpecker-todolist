const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {getList, findLists, createList, updateList, deleteList} = require('../../dataService/lists')

test('dataService', function(t) {
  return seedData().then(() => {

    t.test('Get list test', function (st) {
      return getList(2).then(function (list) {
        st.equal(list.id, 2, 'I want to have your baby')
        st.end()
      })
    })

    t.test('Find lists test', function (st) {
      return findLists().then(function (lists) {
        st.ok(lists.length > 0, 'Returned a non-empty list')
        st.ok(lists[0].id != null, 'List items have id property')
        st.end()
      })
    })

    t.test('Create list test', function (st) {
      return createList({title: 'new title', userId: 1}).then(function (list) {
        st.ok(list.title === 'new title', 'Creating new list, mufucka!')
        st.end()
      })
    })

    t.test('Update list test', function (st) {
      return updateList(1, {title: 'new new title'}).then(function (list) {
        st.ok(list.title === 'new new title', 'Updating your list, muthafucka')
        st.end()
      })
    })

    t.test('Delete list test', function (st) {
      return deleteList(2).then(function (list) {
        st.ok(list.id == null, 'Your list is deleted, mufucka!')
        st.end()
      })
    })
  })
})
