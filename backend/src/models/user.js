// sourdough app
// - users
// -- name/
// -- email/
// -- notes/
// -- recipes/
// -- events/
const mongoose = require('mongoose')

const Recipe = require('./recipe')
const Notes = require('./note')
const Event = require('./event')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', autopopulate: true }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note', autopopulate: true }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', autopopulate: true }],
})

class User {
  async createRecipe(title, ...ingredients) {
    const newRecipe = await Recipe.create({ title: title, ingredients: [...ingredients] })
    this.recipes.push(newRecipe)
    await this.save()
    return newRecipe
  }

  // do these methos belong to User or in their own classes?
  addNote(recipeNotes, recipe) {
    const note = new Notes(recipeNotes)
    this.notes.push(note)
    recipe.notes.push(note)
    return note
  }

  // anything that motifies the state goes into the user class
  createEvent(location, date) {
    const event = new Event(location, date)
    this.events.push(event)
    event.attendees.push(this)

    return event
  }

  joinEvent(event) {
    this.events.push(event)
    event.attendees.push(this)
  }

  leaveEvent(event) {
    // Is this correct?
    //const found = array1.find(element => element > 10);

    // User.events = ['places 1', 'place 2'];

    const eventIndex = this.events.indexOf(event)
    this.events.splice(eventIndex, 1)

    // Events.{ attendees = ['user 1', 'user 2']}

    const removeAttendeeIndex = event.attendees.indexOf(this)
    event.attendees.splice(removeAttendeeIndex, 1)

    return event
  }

  // static create(name, email) {
  //   const newUser = new User(name, email)
  //   User.list.push(newUser)
  //   return newUser
  // }

  // save() {
  //   User.list.push(this)
  // }

  // static list = []
}
userSchema.loadClass(User)
userSchema.plugin(autopopulate)
module.exports = mongoose.model('User', userSchema)
