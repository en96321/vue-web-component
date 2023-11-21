<template>
  <div>
    <h1>AB元件使用Ｂ作為子元件 綠標題</h1>
    <B :name="name" :user="user" :message="message" :users="users" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import B from './B.vue'

const props = defineProps({
  name: String,
  message: String,
  user: Object,
  users: Array
})
</script>


<style scoped>
h1 {
  color: green;
}
</style>
