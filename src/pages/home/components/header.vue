<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont">&#xe6b7;</div>
		</div>
		<div class="header-top">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.$store.state.city}}  <!-- 使用vuex里的数据;state:{city:'北京'},-->
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{		//定义组件名字
	name: 'HomeHeader',
	props:{				//通过props接收父组件传过来的值
		city:String
	},

}
</script>

<style lang="stylus" scoped>	//lang='stylus' 表示引用刚刚的依赖包;scoped表示只对该组件有效,防止污染
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
  .header-left > div{
    font-size .6rem
    padding-left .08rem
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
		min-width: 1.04rem;	//最小宽度为1.04rem
		padding: 0 .1rem
		float: right
		text-align: center
		color: #fff
	}

</style>
