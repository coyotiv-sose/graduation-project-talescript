<script>
import axios from 'axios'

export default {
  name: 'RecipesView',
  data() {
    return {
      recipes: [],
      name: 'alexander'
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/recipes')
    this.recipes = response.data
  },
  methods: {
    async changeName(name) {
      this.name = 'alex'
    }
  }
}
</script>

<template lang="pug">
main
  h1 Recipes
  p {{ name }}
  button(@onClick="changeName") Change name
  ul
    li(v-for="recipe in recipes") {{ recipe.title }}
</template>
