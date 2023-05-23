const request = require('supertest')
const app = require('../src/app')

const mongoose = require('mongoose')

// ...

beforeAll(async () => {
  const user = await User.create({ name: 'John Doe', email: 'john@example.com' })
  const event = await request(app).post('/events').send({
    user: mongoose.Types.ObjectId(), // Generate a new ObjectId
    title: 'Test Event',
    description: 'Testing event',
    location: 'Test location',
    date: '2023-05-30',
  })
  createdEventId = event.body._id
})

describe('Event Routes', () => {
  let createdEventId

  // Create a test event before running the tests
  beforeAll(async () => {
    const response = await request(app).post('/events').send({
      user: 'user_id',
      title: 'Test Event',
      description: 'Test Event Description',
      location: 'Test Location',
      date: '2023-05-30',
    })

    createdEventId = response.body._id
  }, 10000) // Increase the timeout value to 10 seconds

  // Test GET /events route
  it('should retrieve all events', async () => {
    const response = await request(app).get('/events')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  }, 10000) // Increase the timeout value to 10 seconds

  // Test GET /events/:eventId route
  it('should retrieve a specific event', async () => {
    const response = await request(app).get(`/events/${createdEventId}`)
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdEventId)
  }, 10000) // Increase the timeout value to 10 seconds

  // Test POST /events route
  it('should create a new event', async () => {
    const response = await request(app).post('/events').send({
      user: 'user_id',
      title: 'New Event',
      description: 'New Event Description',
      location: 'New Location',
      date: '2023-06-01',
    })

    expect(response.status).toBe(200)
    expect(response.body.title).toBe('New Event')
    expect(response.body.description).toBe('New Event Description')
    expect(response.body.location).toBe('New Location')
    expect(response.body.date).toBe('2023-06-01')
  }, 10000) // Increase the timeout value to 10 seconds

  // Test PUT /events/:id route
  it('should update an event', async () => {
    const updatedEvent = {
      title: 'Updated Event',
      description: 'Updated Event Description',
      location: 'Updated Location',
      date: '2023-06-02',
    }

    const response = await request(app).put(`/events/${createdEventId}`).send(updatedEvent)

    expect(response.status).toBe(200)
    expect(response.body.title).toBe(updatedEvent.title)
    expect(response.body.description).toBe(updatedEvent.description)
    expect(response.body.location).toBe(updatedEvent.location)
    expect(response.body.date).toBe(updatedEvent.date)
  }, 10000) // Increase the timeout value to 10 seconds

  // Test DELETE /events/:id route
  it('should delete an event', async () => {
    const response = await request(app).delete(`/events/${createdEventId}`)
    expect(response.status).toBe(200)

    // Verify that the event is deleted
    const deletedEvent = await request(app).get(`/events/${createdEventId}`)
    expect(deletedEvent.status).toBe(404)
  }, 10000) // Increase the timeout value to 10 seconds
})
