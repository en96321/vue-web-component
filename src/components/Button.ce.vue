<template>
  <button class="button" @click.stop="onClick">
    <slot />
  </button>
</template>

<script setup>

const emit = defineEmits(['click'])

const onClick = (e) => {
  emit('click', { event: e, data: 1 })
}

</script>

<style scoped>
.button {
  width: 200px;
  height: 50px;
  background-color: yellow;
}
</style>