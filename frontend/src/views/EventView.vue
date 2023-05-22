<script>
import { mapActions } from 'pinia'
import { eventStore } from '@/stores/event'

export default {
  name: 'EventsView',
  data() {
    return {
      event: null
    }
  },
  async created() {
    this.event = await this.fetchEvent(this.$route.params.id)
  },
  methods: {
    ...mapActions(eventStore, ['fetchEvent', 'joinEvent', 'leaveEvent']),

    // create button for leaving event
    // add leave event method
    async join(id) {
      await this.joinEvent(id)
      this.event.attendees.push(this)
    },
    async leave(id) {
      await this.leaveEvent(id)
      this.event.attendees.pop(this)
    }
  }
}
</script>
<template>
  <h2>Event detail page</h2>
  <div v-if="!event">
    <p>Loading.....</p>
  </div>
  <div v-else>
    <h2>{{ event.title }}</h2>
    <p>{{ event.description }}</p>
    <p>{{ event.location }}</p>
    <p>{{ event.date }}</p>
    <p v-for="attendee in event.attendees" :key="attendee._id">{{ attendee.name }}</p>
    <div class="grid">
      <button @click="join(event._id)">Join</button>
      <button class="secondary" @click="leave(event._id)">Leave</button>
    </div>
  </div>
</template>
