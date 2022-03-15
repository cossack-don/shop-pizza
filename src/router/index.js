import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lk from '../views/Lk.vue'
import Basket from '../views/Basket.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lk',
    name: 'lk',
    component: Lk
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  },
]

//прописать not found page еще
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
