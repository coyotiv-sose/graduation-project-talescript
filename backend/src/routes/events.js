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
// fix route - in user.js createevent
router.post('/', async (req, res, next) => {
  const user = await User.findById(req.body.user)
  if (!user) {
    return res.status(404).send('User not found')
  }
  const event = await user.createEvent(req.body.title, req.body.description, req.body.location, req.body.date)
  res.send(event)
})

// update an event
router.put('/:id', async (req, res, next) => {
  const event = await Event.findById({ _id: req.params.id })
  event.title = req.body.title
  event.date = req.body.date
  event.description = req.body.description
  await event.save()
  res.send(event)
})

// delete an event
router.delete('/:id', async (req, res, next) => {
  const event = await Event.findByIdAndDelete({ _id: req.params.id })
  res.send(200)
})

// join an event
router.post('/:id/attendees', async (req, res, next) => {
  if (!req.user) {
    return res.status(404).send('User not found')
  }
  const event = await Event.findById({ _id: req.params.id })
  const user = await User.findById(req.body.user)
  await req.user.joinEvent(event)
  res.send(event)
})

// leave an event

router.delete('/:id/attendees', async (req, res, next) => {
  const event = await Event.findById({ _id: req.params.id })
  const user = await User.findById(req.body.user)
  console.log('leaving an event', event)
  await user.leaveEvent(event)
  const updatedEvent = await Event.findById({ _id: req.params.id })
  res.send(updatedEvent)
})

module.exports = router
