<template>
	<div class="header">
		城市选择
		<router-link to='/' class="iconfont back">&#xe618;</router-link>
	</div>
</template>

<script>
export default{
	name:'CityHeader'	//组件名
}
</script>

<style lang="stylus" scoped="scoped">
	.header{
		color:#fff;
		position:relative;
		text-align:center;
		height:.86rem;
		background: #00bcd4;
		line-height:.86rem;
		font-size: .32rem;
	}
	.back{
		position:absolute;
		left:0.08rem;
    font-size:.6rem;
		color:#fff;
	}
</style>
