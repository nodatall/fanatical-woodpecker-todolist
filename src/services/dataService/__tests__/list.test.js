const test = require('src/test')
const seedData = require('src/test/seedData')

const {
  getList,
  findLists,
  createList,
  updateList,
  deleteList
} = require('../lists')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get list test', function (st) {
      const listId = 2
      return getList(listId).then(function (list) {
        st.equal(list.id, listId, 'List item is returned (also: I want to have your baby)')
        st.end()
      })
    })

    t.test('Find lists', function (st) {
      return findLists().then(function (lists) {
        st.ok(lists.length > 0, 'Returned a non-empty list')
        st.ok(lists[0].id != null, 'List items have id property')
        st.end()
      })
    })

    t.test('Create list', function (st) {
      const title = 'new title'
      return createList({title, userId: 1}).then(function (list) {
        st.ok(list.title === title, 'Creating new list, mufucka!')
        st.end()
      })
    })

    t.test('Update list', function (st) {
      const listId = 1
      const title = 'new new title'
      return updateList(listId, {title}).then(function (list) {
        st.ok(list.title === title, 'Updating your list, muthafucka')
        st.end()
      })
    })

    t.test('Delete list', function (st) {
      const listId = 2
      return deleteList(listId).then(function () {
        return getList(listId).then(function (list) {
          st.equal(list, null, 'Your list is deleted, mufucka!' )
          st.end()
        })
      })
    })
  })
})
