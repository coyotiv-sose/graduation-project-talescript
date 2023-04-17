class Event {
  attendees = []

  constructor(location, date) {
    this.location = location
    this.date = date
    this.title = title
    this.description = description
  }

  get upcomingEvents() {
    return this.attendees.filter(event => event.date > Date.now())
  }
}

module.exports = Event
