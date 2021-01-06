import { createRouter, createWebHistory } from 'vue-router'
import CompostersList from '../components/CompostersList.vue'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/composters',
    name: 'CompostersList',
    component: CompostersList
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router