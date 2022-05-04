import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Forums from '../views/Forums.vue'
import Movies from '../views/Movies.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/forums',
      name: 'Forums',
      component: () => import('../views/Forums.vue')
    },
    {
      path: '/movies',
      name: 'Movies',
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    },
  ]
})

export default router
