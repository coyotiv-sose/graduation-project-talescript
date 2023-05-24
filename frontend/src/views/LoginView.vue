<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      await axios.post('/accounts/session', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <p>Log in</p>

  <form @submit.prevent="login">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" />

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />

    <button type="submit">Log in</button>
  </form>
</template>
