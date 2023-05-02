<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <div>
    <h1>Counter</h1>

    <p>Count: {{ count }}</p>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
