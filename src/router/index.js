import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import logInPage from '@/views/Auth/logInPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/logIn',
      name: 'logInPage',
      component: logInPage,
      beforeEnter(to, from, next) {
        if (window.$cookies.get('unlimited-token')) {
          next({ name: 'home' }) // ✅ Redirect logged-in users to home
        } else {
          next() // ✅ Allow non-logged-in users to access /logIn
        }
      },
    },
  ],
})

export default router
