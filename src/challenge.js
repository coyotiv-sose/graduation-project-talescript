/**
 * gamify the challenge class, add logic for user votes
 * on completed challenges. The creator of the recipe
 * can either determine the winner, or leave it to
 * other users to determine if the challenger won or
 * did not win
 */

// ----------- CHALLENGES -------------
// Users can also create their own challenges.
// Users can also join challenges from other people.
//createChallenge(recipeId) // --> create challenge from recipe
//joinChallenge(challengeId) // --> join challenge from other Users
// challenges should have a start and end date
// challenges should have a winner
// winners are determined by the number of votes or by the user who created the challenge

class Challenge {
  constructor(title, difficulty, description, solution) {
    this.title = title
    this.difficulty = difficulty
    this.description = description
    this.solution = solution
  }
  // underscores are not set <==========================
  // Getters and setters
  /*  get title() {
    return this._title
  }
  set title(value) {
    if (typeof value !== 'string' || value === '') {
      console.log('Title must be a non-empty string')
    }
    this._title = value
  }

  get difficulty() {
    return this._difficulty
  }
  set difficulty(value) {
    if (typeof value !== 'string' || !['easy', 'medium', 'hard'].includes(value.toLowerCase())) {
      console.log("Difficulty must be either 'easy', 'medium', or 'hard'")
    }
    this._difficulty = value
  }

  get description() {
    return this._description
  }

  set description(value) {
    if (typeof value !== 'string' || value === '') {
      console.log('Description must be a non-empty string')
    }
    this._description = value
  }

  get solution() {
    return this._solution
  }

  set solution(value) {
    if (typeof value !== 'string' || value === '') {
      console.log('Solution must be a non-empty string')
    }
    this._solution = value
  }

  // Instance methods
  toString() {
    return `${this.title} (${this.difficulty}) - ${this.description}`
  } */
}

export default Challenge
