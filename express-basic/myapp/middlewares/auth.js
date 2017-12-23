module.exports = function auth(req, res, next) {
  console.log(req.query)
  console.log(1)
  if (req.query.username === 'joinmouse'){
    next()
  } else {
    res.end('please go away')
  }
}