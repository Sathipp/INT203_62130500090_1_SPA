import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import router from './router'
import Home from './components/home.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
// app.use(router)
app.component('home', Home)

app.mount('#app')