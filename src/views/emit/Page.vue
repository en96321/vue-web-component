<template>
  <div>
    <h1>測試web component emit & slot</h1>
    <apollo-button @click="onClick">
      <div class="button-text">slot 內容 含class</div>
    </apollo-button>
    <hr />
    <h2>使用打包的web component 包一層vue component</h2>
    <apollo-p-button @click="onClick">
      <div class="button-text">slot 內容 含class</div>
    </apollo-p-button>
    <hr />
    <h2>import vue component</h2>
    <VueButton @click="onClick">
      <div class="button-text">slot 內容 含class</div>
    </VueButton>
    <hr />
    <h2>import vue ce component</h2>
    <VueCEButton @click="onClick">
      <div class="button-text">slot 內容 含class</div>
    </VueCEButton>
  </div>
</template>

<script setup>
import VueCEButton from '../../package/Button.ce.vue'
import VueButton from '../../components/Button.vue'

const onClick = (e) => {
  alert('按下')
}

</script>


<style scoped>
h1 {
  color: red;
}
.button-text {
  color: blue
}
</style>
