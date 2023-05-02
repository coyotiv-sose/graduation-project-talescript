<script>
import axios from 'axios'

export default {
  name: 'RecipesView',
  data() {
    return {
      recipes: [],
      count: 0
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/recipes')
    this.recipes = response.data
  },
  mounted() {
    console.log(this.count)
  }
}
</script>

<template>
  <main>
    <h1>Recipes</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <ul>
      <!--get recipe route for a single recipe-->
      <a :href="`/recipes/recipe.id`">
        <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
      </a>
    </ul>
  </main>
</template>
