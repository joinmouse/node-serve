const mongoose = require('mongoose')

mongoose.Promise = Promise
const Schema = mongoose.Schema

const DB_URL = 'mongodb://localhost:27017/users'
const connection = mongoose.connect(DB_URL, {useMongoClient: true})

const UserSchema = new Schema({
  name: {type: String},
  age: {}
})
(async () => {
  
})()
  .then(r => {
  })
  .catch(e => {
  })

// //connect success
// mongoose.connection.on('connected', function(){
//   console.log('Mongoose connection open to ' + DB_URL)
// })

// //connect error
// mongoose.connection.on('error', function(err) {
//   console.log('Mongoose connection error: ' + err)
// })

// //connect disconnected
// mongoose.connection.on('disconnected', function() {
//   console.log('Mongoose connection disconnected')
// })




