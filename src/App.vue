<template>
  <div id="app">
		<!-- 显示的是当前路由地址所对应的内容,而对应路由文件上写的是：当访问根路径时，就去访问hello word组件 -->
    <router-view/>	<!-- 此标签自动去寻找 router>index.js -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  touch-action: none;
  
}
</style>
