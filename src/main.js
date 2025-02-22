import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSplide from '@splidejs/vue-splide'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide)
app.use(VueCookies)
app.mount('#app')
