const request = require('supertest')
const app = require('../src/app')

describe('Test the root path of the route api', () => {
  // it('Should respond with the GET method', async () => {
  //   const response = await request(app).get('/')
  //   expect(response.statusCode).toBe(200)
  // })

  it('Should respond with the GET method', async () => {
    const response = await request(app).get('/users')
    expect(response.statusCode).toBe(200)
  })

  // it('Should respond with the POST method', async () => {
  //   const name = 'alexander testing'
  //   const email = 'alex@me.com'
  //   const expected = { name: name, email: email }
  //   const actualOutput = await request(app).post('/users').send({
  //     name: name,
  //     email: email,
  //   })
  //   console.log(actualOutput.body)
  //   expect(actualOutput.body).toMatchObject(expected)
  // })
})
