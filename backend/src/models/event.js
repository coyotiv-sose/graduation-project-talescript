// - events
// -- can join event
// -- can leave event/
// -- can create event/
// -- location
// -- date and time of event

class Event {
  attendees = []

  // maybe add name
  constructor(location, date) {
    this.location = location
    this.date = date
    this.title = title
    this.description = description
  }

  joinEvent(user) {
    this.attendees.push(user)
  }

  leaveEvent(user) {
    const index = this.attendees.indexOf(user)
    this.attendees.splice(index, 1)
  }

  // cancel event
  cancelEvent() {
    this.attendees = []
  }

  // getUpcomingEvents
  // getters and setters
}

module.exports = Event
