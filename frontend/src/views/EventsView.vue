<script>
import { mapActions } from 'pinia'
import { eventStore } from '@/stores/event'
import formattedDate from '../lib/time.js'

export default {
  name: 'EventsView',
  data() {
    return {
      events: [],
      date: ''
    }
  },
  async created() {
    this.events = await this.fetchEvents()
  },
  methods: {
    ...mapActions(eventStore, ['fetchEvents'])
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
  <h2>This is events view page</h2>
  <div v-if="!events">
    <p>Loading.....</p>
  </div>
  <div v-else>
    <template v-for="event in events" :key="event._id">
      <article>
        <header>
          <a :href="`/events/${event._id}`">{{ event.title }}</a>
        </header>
        <ul>
          <li>
            <li>{{ event.description }}</li>
            <li>{{ event.location }}</li>
          </li>
        </ul>
        <footer>Date: {{ formatDate(event.date) }}</footer>
      </article>
    </template>
  </div>
</template>
