<script>
import { mapActions } from 'pinia'
import { eventStore } from '@/stores/event'

export default {
  name: 'EventsView',
  data() {
    return {
      events: []
    }
  },
  async created() {
    this.events = await this.fetchEvents()
  },
  methods: {
    ...mapActions(eventStore, ['fetchEvents'])
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
        <footer>Date: {{ event.date }}</footer>
      </article>
    </template>
  </div>
</template>
