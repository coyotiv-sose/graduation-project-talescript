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
    <ul>
      <li v-for="event in events" :key="event._id">
        <a :href="`/events/${event._id}`">{{ event.title }}</a>
        {{ event.description }} and {{ event.location }} - location {{ event.date }} - date
        {{ event.createdAt }}
      </li>
    </ul>
  </div>
</template>
