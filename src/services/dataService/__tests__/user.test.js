const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {getUser, findUsers, createUser, deleteUser, updateUser} = require('../../dataService/user')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get user test', function (st) {
      getUser(1).then(function (user) {
        st.equal(user.id, 1, 'Fuck yeah!')
        st.end()
      })
    })

    t.test('Find user test', function (st) {
    	findUsers().then(function (user) {
    		st.ok(user.length > 0, 'Find a users name, email and password')
    		st.end()
    	})
    })

    t.test('Create user test', function (st) {
    	createUser('michael', 'example@.com', '123').then(function (user) {
    		st.equal(user.name, 'michael', 'Create a new user\s name')
    		st.equal(user.email, 'example@.com', 'Create a new user\s email')
    		st.equal(user.passwordHash, '123', 'Create a new user\s password')
    		st.end()	
    	})
    })

    t.test('Update user test', function (st) {
    	updateUser(2).then(function (user) {
    		st.equal(user.id, 2, 'Updated user\s id')
    		st.end()
    	})
    })

    t.test('Delete user test', function (st) {
    	deleteUser(2).then(function (user) {
    		st.equal(user.id, 2, 'Delete user\s id')
    		st.end()
    	})
    })

  })
})
