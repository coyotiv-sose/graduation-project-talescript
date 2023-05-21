<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAccountStore } from './stores/account'
import CreatePage from './components/CalculatorPage.vue'
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
    ...mapActions(useAccountStore, ['fetchUser', 'logout']),
    // ...mapActions(useSocketStore, ['init'])
    async createRecipe() {
      let res = await fetch('pages.json') // fetch('http://localhost:3000/recipes') isntead of json
      // let res = await fetch('http://localhost:3000/recipes', {
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
      let data = await res.json()
      this.pageCreated = data
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
      <HelloWorld msg="Sourdough" />

      <nav>
        <ul>
          <li><strong>brand</strong></li>
        </ul>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
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

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
