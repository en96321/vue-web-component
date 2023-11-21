<template>
  <div>
    <h1>紅標題Ａ元件</h1>
    <h2>
      <div>name: {{ name }}</div>
      <div>message: {{ message }}</div>
      <div>user->name: {{ user.name }}</div>
      <div>users(array): {{ users }}</div>
    </h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  message: String,
  user: Object,
  users: Array
})

</script>


<style scoped>
h1 {
  color: red;
}
</style>
