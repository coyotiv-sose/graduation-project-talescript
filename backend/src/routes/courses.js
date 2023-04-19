const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const User = require('../models/user')

// get all courses
router.get('/', async (req, res, next) => {
  const courses = await Course.find()
  res.send(courses)
})

// get a course
router.get('/:courseId', async (req, res, next) => {
  const course = await Course.findById(req.params.courseId)
  res.send(course)
})

// create a new course
router.post('/', async (req, res, next) => {
  const user = await User.findById(req.body.user)
  const course = await user.createCourse(req.body.title, req.body.date, req.body.description)
  res.send(course)
})

// update a course
router.put('/:courseId', async (req, res, next) => {
  const course = await Course.findById(req.params.courseId)
  course.title = req.body.title
  course.date = req.body.date
  course.description = req.body.description
  await course.save()
  res.send(course)
})

// delete a course
router.delete('/:courseId', async (req, res, next) => {
  const course = await Course.findById(req.params.courseId)
  await course.remove()
  res.send(course)
})

module.exports = router
