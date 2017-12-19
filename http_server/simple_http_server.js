//URL: Uniform Resource Locator
//Schema://host:port/path?query#hash

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  console.log(url)

  let resString
  if (url === '/hello') {
    resString = 'hi there' 
  } else if (url === '/bye') {
    resString = 'see you next time'
  } else {
    resString = 'go away'
  }

  res.statusCode = 200
  res.end(resString)
})

server.listen(3000, function(req, res) {
  console.log('server is running at port 3000')
})