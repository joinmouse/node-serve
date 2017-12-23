const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')

//body-parser使用,函数的返回为一个函数
//function bodyParser() {
//   return function　json(){}
// }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//app.use(require('./middlewares/auth'))

//中间件处理
function middleware1(req, res, next) {
  console.log('middleware1')
  next()
}
function middleware2(req, res, next) {
  console.log('middleware2')
  next()
}
function middleware3(req, res, next) {
  console.log('middleware3')
  res.end('done')
}

app.use(middleware1, middleware2, middleware3)

// app.use((req, res, next) => {
//   console.log(`req.duang：${req.duang}`)
//   next('something wrong')
// })

// app.use((req, res) => {
//   req.duang = 1
//   console.log(req.duang)
// })

//错误处理中间件
app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)

server.listen(8888, (req, res) => {
  console.log('port: 8888')
})
