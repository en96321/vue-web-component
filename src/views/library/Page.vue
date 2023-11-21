<template>
  <div>
    測試 打包的 lib.js
    兩秒後改變資料
    <apollo-a :name="name" :message="message" :user="user" :users="users"/>
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
setTimeout(() => {
  name.value = 'test change'
  message.value = 'test message change'
  user.name = 'test user.name change'
  users.value.push({ id: 3, name: 'new added' })
}, 2000)

</script>
