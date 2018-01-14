
//一、Http方法：GET POST PATCH PUT DELETE OPTIONS HEAD
//path: /user 
//get：获取所有用户　post:创建用户　patch：修改用户信息　put:创建　delete:删除　options:列举可进行的操作　head：获取头信息

//二、Http请求头：重要的键值对
//Content-Type:请求体的类型(编码、格式等)
//Content-Length: 请求体的长度
//Accept:　能够接受的返回体类型
//Cookie: cookie

//三、Http请求体
//POST上传大的文件采用buffer流式处理

const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const server = http.createServer()

const users = []

server.on('request', (req, res) => {
  const url = req.url

  const queryString = url.substr(url.indexOf('?')+1, url.length)
  const query = qs.parse(queryString)
  console.log(query)

  const path = url.substr(0, url.indexOf('?'))
  console.log(path)

  switch (path) {
    case '/user':
      switch (req.method) {
        case 'GET':
          res.statusCode = 200
          res.end(JSON.stringify(users))
          break;
        case 'POST':
          console.log(req.headers)
          const contentType = req.headers['content-type']
          if(contentType !== 'application/json') {
            res.statusCode = 400
            res.end('error')
          }

          let requestBodyStr = ''
          
          
          //Buffer: 流式处理POST上传数据
          req.on('data', function(data){
            console.log(data)
            //requestBodyStr += data.toString()
          })
          req.on('end', function(){
            const user = JSON.parse(requestBodyStr)
            users.push(user)
            res.statusCode = 200
            res.end(JSON.stringify(user))
          })
          //const user = {name: Math.floor(Math.random() * 100)}
          //users.push(user)
          break;
      }
      break;
    default:
      res.statusCode = 404
      res.end('not found')
  }
})

server.listen(3000, function(req, res) {
  console.log('server is running at port 3000')
})
