const request = require('supertest')
const app = require('../app')

describe('Course Routes', () => {
  let createdCourseId

  // Create a test course before running the tests
  beforeAll(async () => {
    const response = await request(app).post('/courses').send({
      user: 'user_id',
      title: 'Test Course',
      date: '2023-01-01',
      description: 'This is a test course',
    })
    createdCourseId = response.body._id
  })

  // Cleanup after running the tests
  afterAll(async () => {
    await request(app).delete(`/courses/${createdCourseId}`)
  })

  it('should retrieve all courses', async () => {
    const response = await request(app).get('/courses')
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  it('should retrieve a specific course', async () => {
    const response = await request(app).get(`/courses/${createdCourseId}`)
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdCourseId)
    expect(response.body.title).toBe('Test Course')
  })

  it('should create a new course', async () => {
    const response = await request(app).post('/courses').send({
      user: 'user_id',
      title: 'New Course',
      date: '2023-01-02',
      description: 'This is a new course',
    })
    expect(response.status).toBe(200)
    expect(response.body.title).toBe('New Course')
  })

  it('should update a course', async () => {
    const response = await request(app).put(`/courses/${createdCourseId}`).send({
      title: 'Updated Course',
      date: '2023-01-03',
      description: 'This is an updated course',
    })
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdCourseId)
    expect(response.body.title).toBe('Updated Course')
  })

  it('should delete a course', async () => {
    const response = await request(app).delete(`/courses/${createdCourseId}`)
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdCourseId)
  })

  it('should join a course', async () => {
    const response = await request(app).post(`/courses/${createdCourseId}/join`).send({ user: 'user_id' })
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdCourseId)
    expect(response.body.attendees).toContain('user_id')
  })

  it('should leave a course', async () => {
    const response = await request(app).post(`/courses/${createdCourseId}/leave`).send({ user: 'user_id' })
    expect(response.status).toBe(200)
    expect(response.body._id).toBe(createdCourseId)
    expect(response.body.attendees).not.toContain('user_id')
  })
})
