class User {
  constructor(name, email, password) {
    this.id = Math.floor(Math.random() * 1000000) // generate a random id
    this.name = name
    this.email = email
    this.password = password
    this.recipes = {}
    this.notes = {}
    this.pictures = {}
  }

  createRecipe(recipeId, recipe) {
    this.recipes[recipeId] = recipe
    return this.recipes[recipeId]
  }

  deleteRecipe(recipeId) {
    if (!this.recipes[recipeId]) {
      throw new Error(`Recipe with ID ${recipeId} not found.`)
    }
    delete this.recipes[recipeId]
  }

  getNotes(recipeId) {
    return this.notes[recipeId] || []
  }

  addNote(recipeId, note) {
    const notes = this.getNotes(recipeId)
    this.notes[recipeId] = [...notes, note]
    return this.notes[recipeId]
  }

  deleteNoteById(recipeId, noteId) {
    const notes = this.getNotes(recipeId)
    const updatedNotes = notes.filter(note => note.id !== noteId)
    if (notes.length === updatedNotes.length) {
      throw new Error(`Note with ID ${noteId} not found.`)
    }
    this.notes[recipeId] = updatedNotes
  }

  getPictureUrls(recipeId) {
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
  }
}

export default User
