import { createRouter, createWebHistory } from 'vue-router'
import home from '../webpage/home.vue'
import about from '../webpage/about.vue'
import followus from '../webpage/followus.vue'
import contact from '../webpage/contact.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        component: about
    },
    {
        path: '/follow-us',
        name: 'FollowUs',
        component: followus
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router