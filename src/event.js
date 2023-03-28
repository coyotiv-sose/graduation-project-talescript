// ----------- EVENTS -------------
// Users can create events and invite other Users to join them.
//createEvent() // --> create event and invite other Users
// events should have a date and time and place. Users can also add notes about the event.
class Event {
  constructor(name, location, date, startTime, endTime) {
    this.name = name
    this.location = location
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
  }

  setVenue(venue) {
    this.location = venue
  }

  setDateTime(dateTime) {
    const [date, startTime, endTime] = dateTime.split(' ')
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
  }

  displayEvent() {
    const eventDate = new Date(this.date)
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    console.log(`${this.name} @ ${this.location}`)
    console.log(`Date: ${formattedDate}`)
    console.log(`Time: ${this.startTime} - ${this.endTime}`)
  }
}

export default Event
