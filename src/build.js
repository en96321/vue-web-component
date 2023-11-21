import { defineCustomElement } from 'vue'
import A from './components/A.vue'
import AB from './components/AB.vue'
import Model from './components/Model.vue'
import Button from './components/Button.vue'
import PButton from './package/Button.vue'

const AComponent = defineCustomElement(A)
const ABComponent = defineCustomElement(AB)
const ModelComponent = defineCustomElement(Model)
const ButtonComponent = defineCustomElement(Button)
const PackageButton = defineCustomElement(PButton)
export { AComponent, Model }

export function register() {
  customElements.define('apollo-a', AComponent)
  customElements.define('apollo-ab', ABComponent)
  customElements.define('apollo-model', ModelComponent)
  customElements.define('apollo-button', ButtonComponent)
  customElements.define('apollo-p-button', PackageButton)
}