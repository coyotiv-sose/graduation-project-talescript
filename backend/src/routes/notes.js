// const express = require('express')
// const router = express.Router()
// const Note = require('../models/note')
// const User = require('../models/user')

// // get all notes
// router.get('/', async (req, res, next) => {
//   const notes = await Note.find()
//   res.send(notes)
// })

// // get a note
// router.get('/:noteId', async (req, res, next) => {
//   const note = await Note.findById(req.params.noteId)
//   res.send(note)
// })

// // create a new note
// router.post('/', async (req, res, next) => {
//   const user = await User.findById(req.body.user)
//   const note = await user.addNote(req.body.note, req.body.recipe, req.body.date)
//   res.send(note)
// })

// // update a note
// router.put('/:noteId', async (req, res, next) => {
//   const note = await Note.findById(req.params.noteId)
//   note.note = req.body.note
//   note.date = req.body.date
//   await note.save()
//   res.send(note)
// })

// // delete a note
// router.delete('/:noteId', async (req, res, next) => {
//   const note = await Note.findById(req.params.noteId)
//   await note.remove()
//   res.send(note)
// })

// module.exports = router
