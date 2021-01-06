import { createRouter, createWebHistory } from 'vue-router'
import CompostersList from '../components/CompostersList.vue'
import AboutPage from '../components/AboutPage.vue'
import HomePage from '../components/HomePage.vue'
import ComposterDetailPage from "../components/ComposterDetailPage.vue"

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
    path: '/composter-detail/:id',
    name: 'ComposterDetails',
    props: true,
    component: ComposterDetailPage
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