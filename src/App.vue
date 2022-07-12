<template>
  <div id="app">
     
    <home></home>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
	padding:0;margin:0;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  box-sizing: border-box;
}
</style>
