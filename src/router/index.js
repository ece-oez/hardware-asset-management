import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import AnzeigenView from '../views/AnzeigenView.vue'
import ErstellenView from '../views/ErstellenView.vue'
import GuideView from '@/views/GuideView.vue'
import DokumentationView from '@/views/DokumentationView.vue'
import AnwenderSettingsView from '@/views/AnwenderSettingsView.vue'
import AnwendungSettingsView from '@/views/AnwendungSettingsView.vue'

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
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
    {
      path: '/dokumentation',
      name: 'dokumentation',
      component: DokumentationView,
    },
    {
      path: '/anwendersettings',
      name: 'anwendersettings',
      component: AnwenderSettingsView,
    },
    {
      path: '/anwendungsettings',
      name: 'anwendungsettings',
      component: AnwendungSettingsView,
    },
  ],
})

export default router
