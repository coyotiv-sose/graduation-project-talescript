<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAccountStore } from './stores/account'

// import { useSocketStore } from './stores/socket'

import { mapActions, mapState } from 'pinia'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  },
  async mounted() {
    await this.fetchUser()
    // this.init()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser', 'logout', 'register']),
    // ...mapActions(useSocketStore, ['init'])
    async createRecipe() {
      // fetch('/recipes') isntead of json
      // let res = await fetch('/recipes', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     title: 'Sourdough',
      //     description: 'Sourdough bread',
      //     ingredients: ['flour', 'water', 'salt'],
      //     instructions: 'Mix ingredients, let sit, bake'
      //   })
      // })
    }
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
    // ...mapState(useSocketStore, ['connected'])
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li><strong>brand</strong></li>
        </ul>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/calculator">Calculator</RouterLink></li>
          <li><RouterLink to="/recipes">Recipes</RouterLink></li>
          <li><RouterLink to="/events">Events</RouterLink></li>
          <li><RouterLink v-if="!user" to="/login">Log in</RouterLink></li>
          <li><a href="#" rel="noopener noreferrer" v-if="user" @click="logout">Logout</a></li>

          <li><RouterLink v-if="!user" to="/signup">Sign up</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- <h1>sourdough {{ user?.name }} socket? {{ connected ? 'yes' : 'no' }}</h1> -->
  <!-- <HelloWorld msg="Sourdough" /> -->

  <Suspense>
    <RouterView />
  </Suspense>
</template>
