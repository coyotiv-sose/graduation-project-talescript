<script>
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

import axios from 'axios'
import formattedDate from '../lib/time.js'

export default {
  name: 'RecipesView',
  data() {
    return {
      recipes: []
    }
  },
  async created() {
    const response = await axios.get('/recipes')
    this.recipes = response.data
  },
  mixins: [formattedDate],
  computed: {
    formattedDate() {
      return this.formatDate(this.date)
    }
  }
}
</script>

<template>
  <main>
    <h1>Recipes</h1>
    <ul>
      <!--get recipe route for a single recipe-->

      <template v-for="recipe in recipes" :key="recipe._id">
        <article>
          <header>
            <a :href="`/recipes/${recipe._id}`">{{ recipe.title }}</a>
          </header>
          <li>
            <ul>
              {{
                recipe.description
              }}
            </ul>
            <ul v-for="ingredient in recipe.ingredients">
              {{
                ingredient.name
              }}:
              {{
                ingredient.quantity
              }}
            </ul>
          </li>
          <footer>{{ formatDate(recipe.createdAt) }}</footer>
        </article>
      </template>
    </ul>
  </main>
</template>

<style scoped>
ul {
  list-style-type: none;
}
ol {
  list-style-type: none;
}
</style>
