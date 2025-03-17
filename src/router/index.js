import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import AnzeigenView from '../views/AnzeigenView.vue'
import ErstellenView from '../views/ErstellenView.vue'
import GuideView from '@/views/GuideView.vue'
import DokumentationView from '@/views/DokumentationView.vue'
import AnwenderSettingsView from '@/views/AnwenderSettingsView.vue'
import AnwendungSettingsView from '@/views/AnwendungSettingsView.vue'
import AccountView from '@/views/AccountView.vue'
import CorporationView from '@/views/CorporationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: StartView,
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountView,
    },
    {
      path: '/anzeigen',
      name: 'Anzeigen',
      component: AnzeigenView,
    },
    {
      path: '/erstellen',
      name: 'Erstellen',
      component: ErstellenView,
    },
    {
      path: '/guide',
      name: 'Guide',
      component: GuideView,
    },
    {
      path: '/dokumentation',
      name: 'Dokumentation',
      component: DokumentationView,
    },
    {
      path: '/anwendersettings',
      name: 'Anwendersettings',
      component: AnwenderSettingsView,
    },
    {
      path: '/anwendungsettings',
      name: 'Anwendungsettings',
      component: AnwendungSettingsView,
    },
    {
      path: '/corporation',
      name: 'Corporation',
      component: CorporationView,
    },
  ],
})

// changes Tab title

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
