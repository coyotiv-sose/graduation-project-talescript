const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    date: Date,
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: { maxDepth: 1, limit: 10 } }],
  },
  { timestamps: true }
)

class Event {
  // attendees = []

  // constructor(location, date) {
  //   this.location = location
  //   this.date = date
  //   this.title = title
  //   this.description = description
  // }

  get upcomingEvents() {
    return this.attendees.filter(event => event.date > Date.now())
  }
}

eventSchema.loadClass(Event)
eventSchema.plugin(autopopulate)
module.exports = mongoose.model('Event', eventSchema)
