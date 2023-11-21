<template>
    <VueButton @click="onClick">
      <slot />
    </VueButton>
</template>
<script setup>
import VueButton from '../components/Button.vue'

const emit = defineEmits(['click'])

const onClick = ({ event, data }) => {
  emit('click', { event, data })
}
</script>

<style>
@import "../components/button.css";

</style>