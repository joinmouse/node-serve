const express = require('express');
const router = express.Router();

const User = require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = new User(req.query.firstName, req.query.lastName, req.query.age)
  res.locals.user = user
  res.render('user')
});

module.exports = router;
