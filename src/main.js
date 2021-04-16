import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import router from './router'
import Navbar from './components/navbar.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
// app.use(router)
app.component('navbar', Navbar)

app.mount('#app')