const express = require('express')
const router = express.Router()
const Event = require('../models/event')
const User = require('../models/user')

// get all events
router.get('/', async (req, res, next) => {
  const events = await Event.find()
  res.send(events)
})

// get an event
router.get('/:eventId', async (req, res, next) => {
  const event = await Event.findById(req.params.eventId)
  res.send(event)
})

// create a new event
router.post('/', async (req, res, next) => {
  const user = await User.findById(req.body.user)
  const event = await user.createEvent(req.body.title, req.body.date, req.body.description)
  res.send(event)
})

// update an event
router.put('/:eventId', async (req, res, next) => {
  const event = await Event.findById(req.params.eventId)
  event.title = req.body.title
  event.date = req.body.date
  event.description = req.body.description
  await event.save()
  res.send(event)
})

// delete an event
router.delete('/:eventId', async (req, res, next) => {
  const event = await Event.findById(req.params.eventId)
  await event.remove()
  res.send(event)
})

module.exports = router
