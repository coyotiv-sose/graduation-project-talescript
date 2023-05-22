import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'

export const eventStore = defineStore('Events', {
  actions: {
    async fetchEvents() {
      return (await axios.get('/events')).data
    },
    async fetchEvent(id) {
      return (await axios.get(`/events/${id}`)).data
    },
    async joinEvent(id) {
      return (await axios.post(`/events/${id}/attendees`)).data
    },
    async leaveEvent(id) {
      return (await axios.delete(`/events/${id}/attendees`)).data
    }
  }
})
