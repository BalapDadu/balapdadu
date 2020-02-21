const router = require('express').Router()
const { User, Room, RoomActive } = require('../models')

// User registration
router.post('/users', (req, res, next) => {
  const username = { name: req.body.username }
  User.create(username)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'server error' })
    })
})

router.get('/rooms', (req, res, next) => {
  Room.findAll({ include: RoomActive })
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json({ err, message: 'server error' })
    })
})

router.post('/rooms', (req, res, next) => {
  const room = {
    name: req.body.name
  }
  Room.create(room)
    .then(result => {
      const data = {
        UserId: req.body.UserId,
        RoomId: result.id
      }
      return RoomActive.create(data)
    })
    .then(final => {
        console.log(final)
      res.status(200).json(final)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err, message: 'server error' })
    })
})

router.post('/rooms/join', (req, res, next) => {
  RoomActive.create({ UserId: req.body.UserId, RoomId: req.body.RoomId })
    .then(results => {
      res.status(201).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/game/:room_id', (req, res, next) => {
  User
    .findAll({
      include : {
        model : RoomActive,
        where : {
          RoomId : req.params.room_id
        },
      },

    })
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ err, message : 'server error' })
    })
})

module.exports = router
