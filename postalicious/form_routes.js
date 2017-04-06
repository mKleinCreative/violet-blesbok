const server = require('express').Router()
const path = require('path')


server.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
})

server.get('/body', function(request, reponse) {
  response.send(request.body)
})

module.exports = server
