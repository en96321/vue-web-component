<template>
  <div>
    <h1>web component內含有vue子元件，子元件應吃得到資料</h1>
    <apollo-ab :name="name" :user="user" :message="message" :users="users"/>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const name = ref('test')
const message = ref('message')
let user = reactive({
  id: 1,
  name: 'steve'
})
const users = ref([{ id: 1, name: '1' }, { id: 2, name: '2' }])

</script>

