<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-top">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			三亚
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</div>
</template>

<script>
export default{		//定义组件名字
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>	//lang='stylus' 表示引用刚刚的依赖包;scoped表示只对该组件有效
	.header{
		height:.86rem
		line-height:.86rem
		display:flex
		background:#00bcd4
		color:#fff
	}
	.header-left{
		width:.64rem
		float:left
	}	
	.header-top{
		flex: 1
		height: .64rem
		line-height: .64rem
		margin-top: .12rem
		margin-left: .2rem
		padding-left: .2rem
		background: #fff
		border-radius: .1rem
		color: #ccc
	}
	.header-right{
		min-width: 1.04rem
		padding: 0 .1rem
		float: right
		text-align: center
		color: #fff
	}	
		
</style>
