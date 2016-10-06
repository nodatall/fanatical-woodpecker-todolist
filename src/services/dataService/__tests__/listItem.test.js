const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {findListsItem, createListsItem, deleteListsItem, updateListItem} = require('../../dataService/listItemFunctions')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get lists item by id test', function (st) {
      findListsItem(1).then(function (listsItem) {
        st.equal(listsItem.id, 1, 'Returned list item id' )
        st.end()
      })
    })
    t.test('Create new list item', function (st) {
      createListsItem('blah').then(function (listsItem) {
        st.equal(listsItem.description, 'blah', 'Create list item and returned description' )
        st.end()
      })
    })
    t.test('Delete list item', function (st) {
      deleteListsItem(1).then(function () {
        findListsItem(1).then(function (listsItem) {
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
  })
})
