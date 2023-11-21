<template>
  <div>
    <h1>藍標題Ｂ元件</h1>
    <div>
      <div>(String)name: {{ name }}</div>
      <div>(Number)id: {{ id }}</div>
      <div>(Object)user->name: {{ user.name }}</div>
      <div>(Array)Users: {{ users }}</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  name: String,
  id: Number,
  user: Object,
  users: Array
})
</script>


<style scoped>
h1 {
  color: blue;
}
</style>
