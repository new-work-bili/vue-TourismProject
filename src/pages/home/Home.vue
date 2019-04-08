<template>
	<!-- 模板，引用时，引用的就是这里的内容 -->
	<div>	<!-- template下只能有一个根标签 -->
		<HomeHeader></HomeHeader>
	</div>
</template>

<script>
	import HomeHeader from './components/header'	//要加./
	
export default{		//设置引用该组件时，该组件的名字
	name:'Home',
	components:{	//因为是局部组件注册组件
		HomeHeader	//es6:相当于HomeHeader:HomeHeader
	}
}
</script>

<style>
</style>
