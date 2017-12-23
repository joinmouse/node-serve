const User = require('../models/user')

module.exports.getAllUsers = function() {
  return User.list()
}

module.exports.addUser = function(firstName, lastName, age) {
  return User.insert(firstName, lastName, age)
}