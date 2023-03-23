/**
 * gamify the challenge class, add logic for user votes
 * on completed challenges. The creator of the recipe
 * can either determine the winner, or leave it to
 * other users to determine if the challenger won or
 * did not win
 */

class Challenge {
  constructor(createdBy, recipe, challenger) {
    this.createdBy = createdBy
    this.recipe = recipe
    this.challenger = challenger
    this.completed = false
    this.winner = null
    this.votes = []

    this.challenger.addChallenge(this)
    this.createdBy.addChallenge(this)
  }

  getChallenge() {
    return {
      createdBy: this.createdBy,
      recipe: this.recipe,
      challenger: this.challenger,
      completed: this.completed,
      winner: this.winner,
      votes: this.votes,
    }
  }

  addVote(vote) {
    this.votes.push(vote)
  }

  getVotes() {
    return this.votes
  }
}

module.exports = Challenge
