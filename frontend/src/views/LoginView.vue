<script>
import axios from 'axios'
import { useAccountStore } from '../stores/account'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useAccountStore, ['login']),
    async getlogin() {
      await this.login(this.email, this.password)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <p>Log in</p>

  <form @submit.prevent="getlogin">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" />

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />

    <button type="submit">Log in</button>
  </form>
</template>
