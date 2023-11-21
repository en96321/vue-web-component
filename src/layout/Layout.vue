<template>
  <div>
    常用情境測試
    <ul class="list-disc ml-10">
      <li><router-link to="/import">直接import *.vue元件使用</router-link></li>
      <li><router-link to="/children">web component內子元件使用*.vue</router-link></li>
      <li><router-link to="/lib">使用打包好的web component</router-link></li>
      <li><router-link to="/model">使用含v-model的web component</router-link></li>
      <li><router-link to="/emit">使用含emit跟slot的web component</router-link></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<style scoped>
ul {
  color: theme('colors.blue.600')
}
</style>
