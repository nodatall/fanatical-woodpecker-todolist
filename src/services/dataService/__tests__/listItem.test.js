const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {findListItems, createListItem, deleteListItem, updateListItem, getListItem} = require('../../dataService/listItems')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get item by id', function (st) {
      getListItem(1).then(function (listsItem) {
        st.equal(listsItem.id, 1, 'Returned list item id' )
        st.end()
      })
    })
    t.test('Create new list item', function (st) {
      createListItem({listId: 2, description: 'blah'}).then(function (listsItem) {
        st.equal(listsItem.description, 'blah', 'Create list item and returned description' )
        st.equal(listsItem.listId, 2, 'New list item belongs to sepecified list')
        st.end()
      })
    })
    t.test('Delete list item', function (st) {
      deleteListItem(1).then(function () {
        getListItem(1).then(function (listItem) {
          st.equal(listItem, null, 'Deleted a lists item' )
          st.end()
        })
      })
    })
    t.test('Update list item', function (st) {
      let originalDes = ''
      getListItem(2).then(function (listItem) {
        originalDes = listItem.description
      })
      updateListItem(2,{description: 'blarg', complete: true}).then(function (listItem) {
        st.equal(listItem.description, 'blarg', 'Updated list item description and returned new description' )
        st.equal(listItem.complete, true, 'Updated list item complete value to true' )
        st.ok(listItem.description != originalDes, 'Updated description is different than original')
        st.end()
      })
    })
    t.test('Find list\'s items', function (st) {
      findListItems(2).then(function (listItems) {
        st.ok(listItems.length > 0, 'Returned a non-empty list')
        st.ok(listItems[0].description != null, 'List items have description property')
        st.end()
      })
    })
  })
})
