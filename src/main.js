import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import router from './router'
import Home from './components/home.vue'
import About from './components/about.vue'
import FollowUs from './components/follow-us.vue'
import Contact from './components/contact.vue'
// createApp(App).use(router).mount('#app')

const app = createApp(App)
// app.use(router)
app.component('home', Home)
app.component('about', About)
app.component('follow-us', FollowUs)
app.component('contact', Contact)

app.mount('#app')