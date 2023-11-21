import { createApp, defineCustomElement } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import B from "./components/B.ce.vue"
import AB from "./components/AB.ce.vue"
import { register } from "../dist/apollo.js" // import module

register() // register build mode web component
const BComponent = defineCustomElement(B)
const ChildComponent = defineCustomElement(AB)

customElements.define('import-b', BComponent)
customElements.define('child-ab', ChildComponent)

createApp(App).use(router).mount('#app')
