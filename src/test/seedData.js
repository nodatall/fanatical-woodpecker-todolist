const Promise = require('bluebird')
const {reset, User, List, ListItem} = require('../services/dataService/db')

function seedData() {
  return reset({cascade: true})
    .then(() => {
      return seedUsers({count: 2})
    })
    .then(users => {
      return Promise.mapSeries(users, user => {
        return seedLists(user.id, {count: 2})
          .then(lists => {
            return Promise.mapSeries(lists, list => {
              return seedListItems(list.id, {count: 2})
            })
          })
      })
    })
}

function seedUsers({count = 1}) {
  const data = []
  for (let i = 0; i < count; i++) {
    const name = randomName()
    data.push({
      name,
      email: `${name}@me.com`,
    })
  }
  return User.bulkCreate(data)
}

function seedLists(userId, {count = 1}) {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push({userId, title: `List ${randomName()}`})
  }
  return List.bulkCreate(data)
}

function seedListItems(listId, {count = 1}) {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push({listId, description: `List Item ${randomName()}`})
  }
  return ListItem.bulkCreate(data)
}

function randomName() {
  return `${Date.now()}${parseInt(Math.random() * 100, 10)}`
}

module.exports = seedData
