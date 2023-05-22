import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info)
}

app.mount('#app')
