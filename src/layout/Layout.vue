<template>
  <div>
    <ul>
      <li><router-link to="/import">直接import *.ce.vue元件並掛載為web component使用</router-link></li>
      <li><router-link to="/children">web component內子元件使用*.ce.vue</router-link></li>
      <li><router-link to="/lib">使用打包好的web component</router-link></li>
      <li><router-link to="/model">使用含vmodel的web component</router-link></li>
      <li><router-link to="/emit">使用含emit跟slot的web component</router-link></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<style scoped>
ul {
  
}
</style>
