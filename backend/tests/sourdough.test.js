const request = require('supertest')
const app = require('../src/app')
const Course = require('../src/models/course')
const User = require('../src/models/user')

describe('User Routes', () => {
  let createdUserId // to store the ID of the created user for testing purposes

  // Test GET /users
  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await request(app).get('/users')
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
    })
  })

  // Test POST /users
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      }

      const response = await request(app).post('/users').send(newUser)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('_id')
      expect(response.body.name).toBe(newUser.name)
      expect(response.body.email).toBe(newUser.email)

      createdUserId = response.body._id // store the created user ID for further testing
    })
  })

  // Test GET /users/:userId
  describe('GET /users/:userId', () => {
    it('should return a specific user', async () => {
      const response = await request(app).get(`/users/${createdUserId}`)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('_id', createdUserId)
    })
  })

  // Test PUT /users/:userId
  // describe('PUT /users/:userId', () => {
  //   it('should update a specific user', async () => {
  //     const updatedUser = {
  //       name: 'Updated Name',
  //       email: 'alex54@email.com',
  //       password: `123456`,
  //     }

  //     // Mock authentication by setting a user object on the request
  //     const authenticatedRequest = request(app).put(`/users/${createdUserId}`).send(updatedUser)
  //     authenticatedRequest.user = {
  //       /* Mock user object with necessary permissions */
  //     }

  //     const response = await authenticatedRequest
  //     expect(response.status).toBe(200)
  //     expect(response.body).toHaveProperty('_id', createdUserId)
  //     expect(response.body.name).toBe(updatedUser.name)
  //     expect(response.body.email).toBe(updatedUser.email)
  //   })
  // })

  // Test DELETE /users/:userId
  //   describe('DELETE /users/:userId', () => {
  //     it('should delete a specific user', async () => {
  //       const response = await request(app).delete(`/users/${createdUserId}`)
  //       expect(response.status).toBe(200)
  //       expect(response.body).toHaveProperty('_id', createdUserId)
  //     })
  //   })
  // })

  // describe('Course Routes', () => {
  //   let courseId

  //   // Create a test user and course before running the tests
  //   beforeAll(async () => {
  //     const user = await User.create({ name: 'John Doe', email: 'john@example.com' })
  //     const course = await user.createCourse('Math', '2023-05-30', 'Mathematics Course')
  //     courseId = course._id.toString()
  //   })

  //   // Test GET /courses route
  //   it('should retrieve all courses', async () => {
  //     const response = await supertest(app).get('/courses')
  //     expect(response.status).toBe(200)
  //     expect(response.body).toHaveLength(1) // Assuming there's only one course in the database
  //   })

  //   // Test GET /courses/:courseId route
  //   it('should retrieve a specific course', async () => {
  //     const response = await supertest(app).get(`/courses/${courseId}`)
  //     expect(response.status).toBe(200)
  //     expect(response.body._id).toBe(courseId)
  //   })

  //   // Test POST /courses route
  //   it('should create a new course', async () => {
  //     const user = await User.create({ name: 'Jane Smith', email: 'jane@example.com' })

  //     const courseData = {
  //       title: 'English',
  //       date: '2023-06-05',
  //       description: 'English Course',
  //       user: user._id.toString(),
  //     }

  //     const response = await supertest(app).post('/courses').send(courseData)
  //     expect(response.status).toBe(200)
  //     expect(response.body.title).toBe(courseData.title)
  //     expect(response.body.date).toBe(courseData.date)
  //     expect(response.body.description).toBe(courseData.description)
  //   })

  //   // Test PUT /courses/:courseId route
  //   it('should update a specific course', async () => {
  //     const updatedCourseData = {
  //       title: 'Updated Course',
  //       date: '2023-06-10',
  //       description: 'Updated Course Description',
  //     }

  //     const response = await supertest(app).put(`/courses/${courseId}`).send(updatedCourseData)
  //     expect(response.status).toBe(200)
  //     expect(response.body.title).toBe(updatedCourseData.title)
  //     expect(response.body.date).toBe(updatedCourseData.date)
  //     expect(response.body.description).toBe(updatedCourseData.description)
  //   })

  //   // Test DELETE /courses/:courseId route
  //   it('should delete a specific course', async () => {
  //     const response = await supertest(app).delete(`/courses/${courseId}`)
  //     expect(response.status).toBe(200)

  //     // Check if the course is deleted from the database
  //     const deletedCourse = await Course.findById(courseId)
  //     expect(deletedCourse).toBeNull()
  //   })
}) //end of describe
