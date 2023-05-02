<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>

    <p>Count: {{ count }}</p>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
