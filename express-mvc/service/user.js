const User = require('../models/user')
const Subscription = require('../models/subscription')

module.exports.getAllUsers = function() {
  return User.list()
}

module.exports.addUser = function(firstName, lastName, age) {
  return User.insert(firstName, lastName, age)
}

module.exports.getUserById = function(userId) {
  return User.getOneById(userId)
}

module.exports.createSubscription = function(userId, url) {
  const user = User.getOneById(userId)
  if(!user) {
    throw Error('no such user')
  }
  const sub = Subscription.insert(userId, url)
  return sub
}