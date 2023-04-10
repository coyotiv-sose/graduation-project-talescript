var express = require('express')
var router = express.Router()
var User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {

  res.send(User.list) // change url to /users
  return

  res.render('users', {
    user: {
      name: 'Hello dude',
    },
    users: [
      {name: 'Justin'},
      {name: 'Sarah'},
      {name: 'Maria'},
      {name: 'dumbo'},
    ]
  })

})

router.post('/', (req, res, next) => {
  //const user = new User(req.body.name) // gets it from axios post
  // new method created in user.js static
  const user = User.create({name: req.body.name, email: req.body.email})
  res.send({user})
})

/* router.post('/', function (req, res, next) {
  const newUser = User.create(req.body.name, req.body.email);
  res.send(newUser)
})
 */

module.exports = router
