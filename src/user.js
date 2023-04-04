class User {
  constructor(name, email, password) {
    //this.id = Math.floor(Math.random() * 1000000) // generate a random id --------- uuid npm package
    this.name = name
    this.email = email
    this.password = password
    this.recipes = []
    this.events = []
    this.challenges = []

    // create methods for the user to join / leave events, challenges, other
    // objects / classes
    //
    // this.pictures = [] // belongs to recipe
  }
  // mayybe get rid of recipeId
  // from recipe.js pass in the parameters into createRecipe
  createRecipe(recipeId, recipe) {
    // create a new recipe object, push into recipes and return it.
    //this.recipes[recipeId] = recipe
    // return this.recipes[recipeId]
  }

  /*   deleteRecipe(recipeId) {
    if (!this.recipes[recipeId]) {
      throw new Error(`Recipe with ID ${recipeId} not found.`)
    }
    delete this.recipes[recipeId]
  } */
  /* its not in recipe nor users
  getNotes(recipeId) {
    return this.notes[recipeId] || []
  } */

  // instead of recipeId pass in the recipe object
  addNote(recipeId, note) {
    // instead of the next two lines push the note into Recipe.notes or user notes
    const notes = this.getNotes(recipeId)
    this.notes[recipeId] = [...notes, note]
    return this.notes[recipeId]
  }
  /*
  deleteNoteById(recipeId, noteId) {
    // we are deleting a singular note, change variable to singular
    const notes = this.getNotes(recipeId)
    const updatedNotes = notes.filter(note => note.id !== noteId)
    if (notes.length === updatedNotes.length) {
      throw new Error(`Note with ID ${noteId} not found.`)
    }
    this.notes[recipeId] = updatedNotes
  } */

  /*   getPictureUrls(recipeId) {
    return this.pictures[recipeId] || []
  }

  addPictureUrl(recipeId, pictureUrl) {
    const pictureUrls = this.getPictureUrls(recipeId)
    this.pictures[recipeId] = [...pictureUrls, pictureUrl]
    return this.pictures[recipeId]
  }

  deletePictureUrlById(recipeId, pictureUrlId) {
    const pictureUrls = this.getPictureUrls(recipeId)
    const updatedPictureUrls = pictureUrls.filter(pictureUrl => pictureUrl.id !== pictureUrlId)
    if (pictureUrls.length === updatedPictureUrls.length) {
      throw new Error(`Picture with ID ${pictureUrlId} not found.`)
    }
    this.pictures[recipeId] = updatedPictureUrls
  } */
}

export default User
