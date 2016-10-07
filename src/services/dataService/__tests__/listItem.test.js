const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {findListItems, createListItem, deleteListItem, updateListItem, getListItem} = require('../../dataService/listItems')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get item by id', function (st) {
      const listItemId = 1
      return getListItem(listItemId).then(function (listsItem) {
        st.equal(listsItem.id, listItemId, 'Returned list item id' )
        st.end()
      })
    })

    t.test('Create new list item', function (st) {
      const listId = 2
      return createListItem({listId, description: 'blah'}).then(function (listsItem) {
        st.equal(listsItem.description, 'blah', 'Create list item and returned description' )
        st.equal(listsItem.listId, listId, 'New list item belongs to sepecified list')
        st.end()
      })
    })

    t.test('Delete list item', function (st) {
      const listItemId = 1
      return deleteListItem(listItemId).then(function () {
        return getListItem(listItemId).then(function (listItem) {
          st.equal(listItem, null, 'Deleted a lists item' )
          st.end()
        })
      })
    })

    t.test('Update list item', function (st) {
      const listItemId = 2
      return getListItem(listItemId).then(function (originalListItem) {
        return updateListItem(listItemId, {description: 'blarg', complete: true}).then(function (updatedListItem) {
          st.equal(updatedListItem.description, 'blarg', 'Updated list item description and returned new description' )
          st.equal(updatedListItem.complete, true, 'Updated list item complete value to true' )
          st.ok(updatedListItem.description != originalListItem.description, 'Updated description is different than original')
          st.end()
        })
      })
    })

    t.test('Find list\'s items', function (st) {
      return findListItems().then(function (listItems) {
        st.ok(listItems.length > 0, 'Returned a non-empty list')
        st.ok(listItems[0].description != null, 'List items have description property')
        st.end()
      })
    })
  })
})
