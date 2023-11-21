<template>
  <div class="border">
    <h1>v-model 4秒後會從元件內部改變</h1>
    <h2>
      <div>model value: {{ modelValue }}</div>
    </h2>
  </div>
</template>

<script setup>

const props = defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

setTimeout(() => {
  console.log('modelValue changed')
  emit('update:modelValue', 'change model value from child')
}, 4000)
</script>


<style scoped>
h1 {
  color: red;
}
</style>
