//URL: Uniform Resource Locator
//Schema://host:port/path?query#hash

const http = require('http')
const qs = require('querystring')
const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  console.log(url)

  //query分割开
  const queryString = url.substr(url.indexOf('?')+1, url.length)
  console.log(queryString)
  const query = qs.parse(queryString)
  console.log(query)

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