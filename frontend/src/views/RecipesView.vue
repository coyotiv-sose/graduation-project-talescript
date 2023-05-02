<script>
import axios from 'axios'

export default {
  name: 'RecipesView',
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/recipes')
    this.recipes = response.data
  }
}
</script>

<template>
  <main>
    <h1>Recipes</h1>

    <ul>
      <!-- get recipe notes-->

      <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
    </ul>
  </main>
</template>
