<script>
import axios from 'axios'

export default {
  name: 'RecipeView',
  data() {
    return {
      recipe: null
    }
  },
  async created() {
    const response = await axios.get(`http://localhost:3000/recipes/${this.$route.params.id}`)
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
    <p>{{ recipe.ingredients }}</p>
    <p>{{ recipe.instructions }}</p>
  </div>
</template>
