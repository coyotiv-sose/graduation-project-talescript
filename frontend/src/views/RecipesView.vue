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
      <!--get recipe route for a single recipe-->

      <li v-for="recipe in recipes" :key="recipe._id">
        <a :href="`/recipes/${recipe._id}`">{{ recipe.title }}</a>
        {{ recipe.description }} and {{ recipe.ingredients[0] }} - Ingredients length
        {{ recipe.ingredients.length }} - and
        {{ recipe.createdAt }}
      </li>
    </ul>
  </main>
</template>
