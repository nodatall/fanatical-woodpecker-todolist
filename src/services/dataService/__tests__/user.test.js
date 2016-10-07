const test = require('../../../test')
const seedData = require('../../../test/seedData')
const {getUser, findUsers, createUser, deleteUser, updateUser} = require('../../dataService/user')

test('dataService', function(t) {
  return seedData().then(() => {
    t.test('Get user test', function (st) {
      getUser(1).then(function (user) {
        st.equal(user.id, 1, 'Got user\'s id')
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
    	return updateUser(2, {name: 'Beyonce'}).then(function (user) {
            st.equal(user.id, 2, 'Updated user\'s id')
    		st.end()
    	})
    })

    t.test('Delete user test', function (st) {
    	return deleteUser(2).then(function (user) {
            return getUser(2).then(function (user) {
                st.notOk(user, "User is not returned after being deleted")
                st.end()
            })
    	})
    })

  })
})
