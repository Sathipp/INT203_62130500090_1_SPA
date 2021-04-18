import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import navbar from './components/navbar.vue'

const app = createApp(App)
app.component('navbar', navbar)
app.use(router).mount('#app')

//app.mount('#app')