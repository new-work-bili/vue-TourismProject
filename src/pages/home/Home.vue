<template>
	<!-- 模板，引用时，引用的就是这里的内容 -->
	<div>	<!-- template下只能有一个根标签 -->
		<div>Home</div>
		<router-link to="/list" class="home">列表页</router-link>
	</div>
</template>

<script>
export default{		//设置引用该组件时，该组件的名字
	name:'Home'
}
</script>

<style>
</style>
