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
          <footer>{{ recipe.createdAt }}</footer>
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
