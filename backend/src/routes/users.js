const express = require('express')
const router = express.Router()
const User = require('../models/user')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.find()
  if (req.query.view === 'json') return res.send(users) // change url to /users

  res.render('users', {
    users: users,
  })
})

router.post('/', async (req, res, next) => {
  //const user = new User(req.body.name) // gets it from axios post
  // new method created in user.js static
  const user = await User.create({ name: req.body.name, email: req.body.email })
  res.send(user)
})

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
