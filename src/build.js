import { defineCustomElement } from 'vue'
import A from './components/A.ce.vue'
import Model from './components/Model.ce.vue'
import Button from './components/Button.ce.vue'
import PButton from './package/Button.ce.vue'

const AComponent = defineCustomElement(A)
const ModelComponent = defineCustomElement(Model)
const ButtonComponent = defineCustomElement(Button)
const PackageButton = defineCustomElement(PButton)
export { AComponent, Model }

export function register() {
  customElements.define('apollo-a', AComponent)
  customElements.define('apollo-model', ModelComponent)
  customElements.define('apollo-button', ButtonComponent)
  customElements.define('apollo-p-button', PackageButton)
}