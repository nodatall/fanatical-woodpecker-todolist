const Promise = require('bluebird')
const {reset, User, List, ListItem} = require('../services/dataService/db')

function seedData(options) {
  const {
    userCount = 2,
    listCount = 2,
    listItemCount = 2,
  } = options || {}

  return reset({cascade: true})
    .then(() => {
      const users = []
      for (let i = 0; i < userCount; i++) {
        users.push(randomUser())
      }
      return Promise.mapSeries(users, user => {
        return User.create(user)
      })
    })
    .then(users => {
      const lists = []
      users.forEach(user => {
        for (let i = 0; i < listCount; i++) {
          lists.push(randomList(user.id))
        }
      })
      return Promise.mapSeries(lists, list => {
        return List.create(list)
      })
    })
    .then(lists => {
      const listItems = []
      lists.forEach(list => {
        for (let i = 0; i < listItemCount; i++) {
          listItems.push(randomListItem(list.id))
        }
      })
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
