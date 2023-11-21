<template>
  <div class="apollo-button">
    <button class="button bg-red-400" @click.stop="onClick">
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