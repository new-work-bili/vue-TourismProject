<template>
  <div id="app">
		<!-- 再次访问页面时,把json文件直接保存在内存 -->
		<keep-alive exclude="Detail">	<!-- 表示对于Detail组件，不进行缓存 -->
			<router-view/>	<!-- 此标签自动去寻找 router>index.js -->
		</keep-alive>
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
  /* touch-action: none; */
  /* height: 100%; */
  
}
</style>
