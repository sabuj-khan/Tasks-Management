

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import * as bootstrap from 'bootstrap'


import './assets/sass/style.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
