const express = require('express')
const server = express()
const http = require('http').createServer(server)
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const requestPromise = require('request-promise')
const port = process.env.PORT || 3001
const index = require('./form_routes.js')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', index)

server.post('/construct_request', function(request, response) {

  const options = {
    method: `${request.body.method}`,
    uri: `${request.body.host}`,
    qs: {
      [`${request.body.Query_Key1}`]:`${request.body.Query_Value1}`,
      [`${request.body.Query_Key2}`]:`${request.body.Query_Value2}`,
      [`${request.body.Query_Key3}`]:`${request.body.Query_Value3}`
    },
    body: JSON.stringify(request.body.response),
  }

  console.log('request.body:', request.body)
  requestPromise(options)
    .then(function(results) {
      response.json(results)
    })
})


server.use(logger("combined"))

server.set(port)

server.listen(port)

module.exports = server
