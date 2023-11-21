<template>
  <div class="apollo-button">
    <button class="button" @click.stop="onClick">
      <slot />
    </button>
  </div>
</template>

<script setup>

const emit = defineEmits(['click'])

const onClick = (e) => {
  emit('click', { event: e, data: 1 })
}

</script>

<style scoped>
@import "./button.css";
</style>