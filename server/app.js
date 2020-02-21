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
  .use('/', routes)

io.on('connection', socket => {
  console.log('a user connected')
  socket.on('dadu', object => {
    console.log('nilai ' + object.value)
    io.emit('dadu', object)
  })
  socket.on('player', object => {
    console.log(object)
    io.sockets.to(object.id).emit('player', object.user)
  })
  socket.on('ambil-room', () => {
    io.emit('fetch-room')
  })
  socket.on('create-room', () => {
    io.emit('fetch-room')
  })
  socket.on('join-room', payload => {
    console.log(payload)
    socket.join(payload)
    io.emit('fetch-room')
  })
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
})

http.listen(PORT, function() {
  console.log('app connected on port', PORT)
})
