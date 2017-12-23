const express = require('express');
const router = express.Router();

const userService = require('../service/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = userService.getAllUsers()
  res.locals.users = users
  res.render('user')
});

router.post('/', function(req, res){
  const {firstName, lastName, age} = req.body
  const users = userService.addUser(firstName, lastName, age)
  res.json(users)
})

module.exports = router;
