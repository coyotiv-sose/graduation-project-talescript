<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { noteStore } from '@/stores/note'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default {
  name: 'RecipeView',
  data() {
    return {
      recipe: null
    }
  },
  async created() {
    try {
      // this.recipe = await this.addNote(`/recipes/${this.$route.params.id}`)
      const response = await axios.get(`/recipes/${this.$route.params.id}`)
      this.recipe = response.data
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Recipe not found
        this.recipe = null
      } else {
        // Handle other errors
        console.error(error)
      }
    }
  },
  methods: {
    ...mapActions(noteStore, ['fetchRecipe', 'addNote']),
    async submitNote() {
      const response = await axios.post(`/recipes/${this.$route.params.id}`, {
        recipeNotes: this.response.data
      })
      this.addNote({
        recipeNotes: this.recipeNotes.response.data
      })
      this.recipeNotes = ''
    }
  }
}
</script>

<template>
  <h1>Recipe</h1>
  <div v-if="!recipe">
    <p>loading...</p>
  </div>
  <div v-else>
    <h2>{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
    <template v-for="ingredient in recipe.ingredients" :key="ingredient._id">
      <ul>
        <li>{{ ingredient.name }}: {{ ingredient.quantity }}</li>
      </ul>
    </template>

    <template v-for="note in recipe.notes" :key="note._id">
      <!-- <p>{{ note.recipeNotes }}</p> -->
    </template>
    <form action="" method="post">
      <label for="recipeNotes">Add a note:</label>
      <input type="text" name="recipeNotes" id="recipeNotes" />
      <button type="submit">Add Note</button>
    </form>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
ol {
  list-style-type: none;
}
</style>
