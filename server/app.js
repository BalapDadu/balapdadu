const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(http)
const routes = require('./routes')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

io.on('connection', socket => {
  console.log('a user connected')
})

http.listen(PORT, function() {
  console.log('app connected on port', PORT)
})
