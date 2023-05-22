const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const Recipe = require('./recipe')
const Notes = require('./note')
const Event = require('./event')
const Course = require('./course')
const recipe = require('./recipe')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', autopopulate: { maxDepth: 1, limit: 10 } }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note', autopopulate: { maxDepth: 1, limit: 10 } }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', autopopulate: { maxDepth: 1, limit: 10 } }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', autopopulate: { maxDepth: 1, limit: 10 } }],
})

class User {
  async createRecipe(title, ingredients) {
    const newRecipe = await Recipe.create({ title: title, ingredients: ingredients })
    this.recipes.push(newRecipe)
    await this.save()
    return newRecipe
  }

  async editRecipe(recipe, title, ingredients) {
    recipe.title = title
    recipe.ingredients = ingredients
    await recipe.save()
    return recipe
  }

  async deleteRecipe(recipe) {
    const recipeIndex = this.recipes.indexOf(recipe)
    this.recipes.splice(recipeIndex, 1)
    await this.save()
    return recipe
  }

  async copyRecipe(recipe) {
    const newRecipe = await Recipe.create(recipe.title, recipe.ingredients)
    this.recipes.push(newRecipe)
    return newRecipe
  }

  // anything that motifies the state goes into the user class
  // fix function
  async createEvent(title, description, location, date) {
    const event = await Event.create({ title, description, location, date })
    this.events.push(event)
    event.attendees.push(this)
    await this.save()
    await event.save()

    return event
  }

  async joinEvent(event) {
    this.events.push(event)
    event.attendees.push(this)
    await this.save()
    await event.save()

    return event
  }

  async leaveEvent(event) {
    const eventIndex = this.events.indexOf(event)
    this.events.splice(eventIndex, 1)

    const removeAttendeeIndex = event.attendees.indexOf(this)
    event.attendees.splice(removeAttendeeIndex, 1)
    await this.save()
    await event.save()

    return event
  }

  cancelEvent(event) {
    event.attendees = []
    return event
  }

  async addNote(recipeNotes, recipe) {
    const note = await Notes.create({ recipeNotes: recipeNotes })
    this.notes.push(note)
    recipe.notes.push(note)
    await this.save()
    await recipe.save()
    return note
  }

  editNote(recipeNotes, note) {
    note.recipeNotes = recipeNotes
    return note
  }

  async deleteNote(note) {
    const noteIndex = this.notes.indexOf(note)
    this.notes.splice(noteIndex, 1)
    await this.save()
    const recipe = await Recipe.findOne({ notes: note })
    recipe.notes.splice(recipe.notes.indexOf(note), 1)
    await recipe.save()
    return recipe.notes
  }

  async createCourse(title, description, price, startDate, endDate) {
    const course = await Course.create(title, description, price, startDate, endDate)
    this.courses.push(course)
    return course
  }

  editCourse(course, title, description, price, startDate, endDate) {
    course.title = title
    course.description = description
    course.price = price
    course.startDate = startDate
    course.endDate = endDate
    return course
  }

  joinCourse(course) {
    this.courses.push(course)
    course.students.push(this)
  }

  deleteCourse(course) {
    const courseIndex = this.courses.indexOf(course)
    this.courses.splice(courseIndex, 1)
    return course
  }
}
userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('User', userSchema)
