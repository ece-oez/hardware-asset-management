import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import AnzeigenView from '../views/AnzeigenView.vue'
import ErstellenView from '../views/ErstellenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartView,
    },
    {
      path: '/anzeigen',
      name: 'anzeigen',
      component: AnzeigenView,
    },
    {
      path: '/erstellen',
      name: 'erstellen',
      component: ErstellenView,
    },
  ],
})

export default router
