class HTTPBaseError extends Error {
  constructor(httpStatusCode, httpMsg, errCode, message) {
    super(`HTTP ERROR: ${message}`)
    this.httpStatusCode = httpStatusCode
    this.errCode = errCode
    this.httpMsg = httpMsg
  }
}

module.exports = HTTPBaseError

try {
  throw new HTTPBaseError(404, '资源不存在', 100000, 'resource not found')  
} catch (e) {
  console.log(e.message)
  console.log(e.httpStatusCode)
  console.log(e.errCode)
  console.log(e.httpMsg)
}
