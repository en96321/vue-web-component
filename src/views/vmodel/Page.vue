<template>
  <div>
    <h1>測試web component v-model, 主元件2秒後改變資料，子元件4秒後會改變狀態</h1>
    <div>parent data: {{ title }}</div>
    <apollo-model v-model="title" @update="onUpdate"/>

    <hr />
    測試在專案內import vue元件進來的v-model
    <div> parent data: {{ title2 }}</div>
    <Model v-model="title2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Model from '../../components/Model.ce.vue'

const title = ref('parent model value')
const title2 = ref('parent model value')
setTimeout(() => {
  title.value='parent model value changed'
  title2.value = 'parent model value changed'
}, 2000)

const onUpdate = (e) => {
  console.log(e)
}

</script>


<style scoped>
h1 {
  color: red;
}
</style>
