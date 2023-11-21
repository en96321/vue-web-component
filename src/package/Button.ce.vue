<template>
    <VueButton @click="onClick">
      <slot />
    </VueButton>
</template>
<script setup>
import VueButton from '../components/Button.vue'

const onClick = () => {
  alert('test')
}
</script>

<style>
@import "../components/button.css";

</style>