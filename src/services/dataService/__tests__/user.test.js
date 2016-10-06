const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {createUser} = require('../../dataService')

test('dataService', function(t) {
  return seedData().then(() => {
    //t.test('Get user test', function (st) {
    //   getUser(1).then(function (user) {
    //     st.equal(user.id, 1, 'Fuck yeah!' )
    //     st.end()
    //   })
    // })

    // t.test('Find user test', function (st) {
    // 	return findUser().then(function (user) {
    // 		st.ok(user[0].id != null, 'Users have id property ')
    // 		st.end()
    // 	})
    // })

    t.test('Create user test', function (st) {
    	createUser('michael', 'example@.com', '123').then(function (user) {
    		st.equal(user.name, 'michael', 'Create a new user')
    		st.end()	
    	})
    })

    // t.test('Update user test', function (st) {
    // 	updateUser(2, {name: 'beyonce'}).then(function (user) {
    // 		st.equal(user.name, 'Updated user\s name')
    // 		st.end()
    // 	})
    // })

    // t.test('Delete user test', function (st) {
    // 	deleteUser(1).then(function (user) {
    // 		st.equal(user, null, 'Delete user\s name')
    // 		st.end()
    // 	})
    // })

  })
})
