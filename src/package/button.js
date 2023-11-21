import { defineCustomElement } from 'vue'
import PButton from './Button.vue'

const PackageButton = defineCustomElement(PButton)

export function register() {
  customElements.define('apollo-p-button', PackageButton)
}