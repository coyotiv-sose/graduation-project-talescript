<script>
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default {
  name: 'RecipeView',
  data() {
    return {
      recipe: null
    }
  },
  async created() {
    const response = await axios.get(`/recipes/${this.$route.params.id}`)
    this.recipe = response.data
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
      <p>{{ note.recipeNotes }}</p>
    </template>
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
