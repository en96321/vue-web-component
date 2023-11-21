import { createApp, defineCustomElement } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { register } from "../dist/apollo.js" // import module

register() // register build mode web component

createApp(App).use(router).mount('#app')
