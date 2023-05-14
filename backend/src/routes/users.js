const express = require('express')
const router = express.Router()
const User = require('../models/user')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  return res.send(users) // change url to /users
})

// create a new user
router.post('/', async function (req, res, next) {
  const { name, email, password } = req.body
  const user = await User.register({ name, email }, password)
  res.send(user)
})

router.get('/:userId', async function (req, res, next) {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

router.post('/', async (req, res, next) => {
  //const user = new User(req.body.name) // gets it from axios post
  // new method created in user.js static
  const user = await User.create({ name: req.body.name, email: req.body.email })
  // if user or email already exists in db, return error
  if (!user) return res.status(400).send('User already exists')
  res.send(user)
})

router.put('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId)
  user.name = req.body.name
  user.email = req.body.email
  await user.save()
  res.send(user)
})

router.delete('/:userId', async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.userId)
  // if user doesn't exist, return error
  if (!user) return res.status(400).send('User does not exist')

  res.send(user)
})

// delete other properties of user / composition between classes

/* router.post('/', function (req, res, next) {
  const newUser = User.create(req.body.name, req.body.email);
  res.send(newUser)
})
 */

// router.post('/:userId/recipes', (req, res, next) => {
//   try {
//     const user = User.list.find(user => user.name === req.params.userId)

//     const recipe = user.createRecipe({
//       title: req.body.title,
//       date: req.body.date,
//       ingredients: req.body.ingredients})
//     // because of a circular error, send directly instead of the recipe
//     res.send({title: recipe.name, date: recipe.date, ingredients: recipe.ingredients})
//   } catch (err) {
//     res.status(400).send(err.message)
//   }
// })

module.exports = router
