const test = require('src/test')
const seedData = require('src/test/seedData')

const {
  getUser,
  findUsers,
  createUser,
  deleteUser,
  updateUser
} = require('../user')

test.skip('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get user test', function (st) {
      const userId = 1
      return getUser(userId).then(function (user) {
        st.equal(user.id, userId, 'Got user\'s id')
        st.end()
      })
    })

    t.test('Find user test', function (st) {
    	return findUsers().then(function (user) {
        st.ok(user.length > 0, 'Find a users name, email and password')
    		st.end()
    	})
    })

    t.test('Create user test', function (st) {
    	return createUser({name: 'michael', email: 'example@.com', passwordHash: '123'}).then(function (user) {
        st.equal(user.name, 'michael', 'Create a new user\'s name')
        st.equal(user.email, 'example@.com', 'Create a new user\'s email')
        st.equal(user.passwordHash, '123', 'Create a new user\'s password')
    		st.end()
    	})
    })

    t.test('Update user test', function (st) {
      const userId = 2
    	return updateUser(userId, {name: 'Beyonce'}).then(function (user) {
        st.equal(user.id, userId, 'Updated user\'s id')
    		st.end()
    	})
    })

    t.test('Delete user test', function (st) {
      const userId = 2
    	return deleteUser(userId).then(function () {
        return getUser(userId).then(function (user) {
          st.notOk(user, "User is not returned after being deleted")
          st.end()
        })
    	})
    })
  })
})
