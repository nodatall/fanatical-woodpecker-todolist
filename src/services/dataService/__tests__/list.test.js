// const test = require('../../../test')
// const seedData = require('../../../test/seedData')
// const {getUser, getList, findLists} = require('../../dataService')
//
// test('dataService', function(t) {
//   return seedData().then(() => {
//
//     t.test('Get list test', function (st) {
//       return getList(2).then(function (list) {
//         st.equal(list.id, 2, 'I want to have your baby')
//         st.end()
//       })
//     })
//
//     t.test('Find lists test', function (st) {
//       return findLists().then(function (lists) {
//         st.ok(lists.length > 0, 'Returned a non-empty list')
//         st.ok(lists[0].id != null, 'List items have id property')
//         st.end()
//       })
//     })
//   })
// })
