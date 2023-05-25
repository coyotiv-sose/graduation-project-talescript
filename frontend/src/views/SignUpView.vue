<script>
import axios from 'axios'
import { useAccountStore } from '../stores/account'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    ...mapActions(useAccountStore, ['register']),
    async getRegister() {
      await this.register(this.name, this.email, this.password)
      this.$router.push('/')
    }
  }
}
</script>
<template>
  <p>Sign Up</p>

  <form @submit.prevent="getRegister">
    <label for="name">Name</label>
    <input type="name" id="name" v-model="name" />

    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" />

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />

    <button type="submit">Sign Up</button>
  </form>
</template>
