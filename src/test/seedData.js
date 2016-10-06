const Promise = require('bluebird')
const {reset, models: {User, List, ListItem}} = require('../services/dataService/db')

function seedData() {
  // TODO: allow to be specified as options
  const counts = {
    users: 2,
    lists: 2,
    items: 2,
  }

  return reset({cascade: true})
    .then(() => {
      const users = []
      for (let i = 0, count = counts.users; i < count; i++) {
        users.push(randomUser())
      }

      return Promise.mapSeries(users, user => {
        return User.create(user)
      })
    })
    .then(users => {
      const lists = users.reduce((result, user) => {
        for (let i = 0, count = counts.lists; i < count; i++) {
          result.push(randomList(user.id))
        }
        return result
      }, [])

      return Promise.mapSeries(lists, list => {
        return List.create(list)
      })
    })
    .then(lists => {
      const listItems = lists.reduce((result, list) => {
        for (let i = 0, count = counts.items; i < count; i++) {
          result.push(randomListItem(list.id))
        }
        return result
      }, [])

      return Promise.mapSeries(listItems, listItem => {
        return ListItem.create(listItem)
      })
    })
}

function randomUser() {
  const name = randomName()
  return {
    name,
    email: `${name}@me.com`,
  }
}

function randomList(userId) {
  return {
    userId,
    title: `List ${randomName()}`
  }
}

function randomListItem(listId) {
  return {
    listId,
    description: `List Item ${randomName()}`
  }
}

function randomName() {
  return `${Date.now()}${parseInt(Math.random() * 100, 10)}`
}

module.exports = seedData
