const express = require('express');
const router = express.Router();

const userService = require('../service/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = userService.getAllUsers()
  res.locals.users = users
  res.render('users')
});

router.post('/', function(req, res){
  const {firstName, lastName, age} = req.body
  const users = userService.addUser(firstName, lastName, age)
  res.json(users)
})

router.get('/:userId', (req, res) => {
  const user = userService.getUserById(Number(req.params.userId))
  res.locals.user = user
  res.render('user')
})

router.post('/:userId/subscription', (req, res, next) => {
  try {
    const sub = userService.createSubscription(Number(req.params.userId), req.body.url)
    res.json(sub) 
  } catch (e) {
    next(e)
  }
})
module.exports = router;
