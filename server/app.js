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
  socket.on('dadu', object => {
    console.log('nilai ' + object.value)
    io.emit('dadu', object)
  })
  socket.on('player', object => {
    console.log(object)
    io.emit('player', object)
  })
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
  socket.on('ambil-room', () => {
    io.emit('fetch-room')
  })
  socket.on('create-room', payload => {
    let newRoom = {
      name: payload.name,
      turn: 0,
      players: [payload.username]
    }
    console.log('a new room created')
    rooms.push(newRoom)
    socket.join(newRoom.name)
    io.emit('fetch-room', rooms)
  })
  socket.on('join-room', payload => {
    const index = rooms.findIndex(room => room.name === payload.name)
    console.log(index)
    if (index === -1) {
      socket.emit('doesnt-exist', 'Room doesnt exist')
    } else if (rooms[index].players.length < 2) {
      rooms[index].players.push(payload.username)
      socket.join(payload.name)
      io.emit('fetch-room', rooms)
      socket.emit('game-start', rooms[index])
    } else {
      socket.emit('full-room', 'Room already have 2 players')
    }
  })
})

http.listen(PORT, function() {
  console.log('app connected on port', PORT)
})
