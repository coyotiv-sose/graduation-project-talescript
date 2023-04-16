const initialsExtractor = require('./initialsExtractor')

describe('initialsExtractor', () => {
  it('should extract initials from a name', () => {
    const name = 'John Doe'
    const actualOutput = initialsExtractor(name)
    const expectedOutput = 'JD'

    expect(actualOutput).toBe(expectedOutput)
  })

  it('should extract initials from a name with multiple words', () => {
    const name = 'John Doe Smith'
    const actualOutput = initialsExtractor(name)
    const expectedOutput = 'JDS'

    expect(actualOutput).toBe(expectedOutput)
  })

  it('should extract initials from a name with multiple middle names', () => {
    const name = 'Rodrigo José de la Rosa'
    const actualOutput = initialsExtractor(name)
    const expectedOutput = 'RJR'
    expect(actualOutput).toBe(expectedOutput)
  })
})
