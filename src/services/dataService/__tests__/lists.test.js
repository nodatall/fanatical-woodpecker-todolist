const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {getList, findLists, createList, updateList, deleteList} = require('../../dataService')


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

  //new tests below

  t.test('Create new list test', function (st) {
    return createList(2).then(function (list) {
      st.equal(list.id, 2, 'I want to have your baby')
      st.end()
    })
  })

  t.test('Update list test', function (st) {
    return findLists().then(function (lists) {
      st.ok(lists.length > 0, 'Returned a non-empty list')
      st.ok(lists[0].id != null, 'List items have id property')
      st.end()
    })
  })

  t.test('Delete list test', function (st) {
    return getList(2).then(function (list) {
      st.equal(list.id, 2, 'I want to have your baby')
      st.end()
    })
  })
