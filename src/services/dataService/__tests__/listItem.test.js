const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {findListItem, createListItem, deleteListItem, updateListItem, getListItem} = require('../../dataService/listItemFunctions')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get lists item by id test', function (st) {
      findListItem(1).then(function (listsItem) {
        st.equal(listsItem.id, 1, 'Returned list item id' )
        st.end()
      })
    })
    t.test('Create new list item', function (st) {
      createListItem('blah').then(function (listsItem) {
        st.equal(listsItem.description, 'blah', 'Create list item and returned description' )
        st.end()
      })
    })
    t.test('Delete list item', function (st) {
      deleteListItem(1).then(function () {
        findListItem(1).then(function (listsItem) {
          st.equal(listsItem, null, 'Deleted a lists item' )
          st.end()
        })
      })
    })
    t.test('Update list item', function (st) {
      updateListItem(2,{description: 'blarg'}).then(function (listsItem) {
        st.equal(listsItem.description, 'blarg', 'Updated list item description and returned new description' )
        st.end()
      })
    })
    t.test('Get list\'s items', function (st) {
      getListItem(2).then(function (listItems) {
        st.ok(listItems.length > 0, 'Returned a non-empty list')
        st.ok(listItems[0].id != null, 'List items have id property')
        st.end()
      })
    })
  })
})
