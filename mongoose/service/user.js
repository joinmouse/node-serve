const User = require('../models/mongoose/user')
const Subscription = require('../models/memo/subscription')

module.exports.getAllUsers = async function() {
  const users = await User.list()
  return users
}

module.exports.addUser = async function(name, age) {
  const user =  User.insert({
    name,
    age
  })
  return user
}

module.exports.getUserById = async function(userId) {
  const user =  User.getOneById(userId)
  return user
}

module.exports.createSubscription = function(userId, url) {
  const user = User.getOneById(userId)
  if(!user) {
    throw Error('no such user')
  }
  const sub = Subscription.insert(userId, url)
  return sub
}
