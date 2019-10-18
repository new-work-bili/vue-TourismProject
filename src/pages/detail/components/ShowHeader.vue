	<!-- 实现下滑隐藏头部 -->
<template>
	<div>
		<!-- 在顶部时显示这个 -->
		<router-link 
		class="back"
		to='/'
		tag="div"
		v-show="showOne"
		>返回</router-link>
		<!-- 下拉到一定程度时显示这个，上面的就会消失;这里结构样式跟city的header很像 -->
		<div class="fixed-header" v-show="!showOne" :style="opacityStyle"><!-- :style动态样式 -->
			景点详情
			<router-link to='/' class="fixed-back">返回</router-link>
		</div>
	</div>
</template>

<script >
	export default{
		name:'ShowHeader',
		data() {
			return {
				showOne: true	,//这两个div同一时间只能显示一个
				opacityStyle:{	//data里定义动态属性
					opacity:0
				}
			}
		},
		methods: {
			handleScroll() {
				//document.documentElement.scrollTop：获取滚动条的位置
				const top = document.documentElement.scrollTop
				if(top > 60){
					this.showOne = false
					let newOpacity = top / 140	//让透明度随下滑的高度而变化
					newOpacity = newOpacity > 1 ? 1 : newOpacity	//opacity最大值为1
					this.opacityStyle={opacity : newOpacity}
				}else{
					this.showOne = true
				}
				
			}
		},
		mounted () {
			//addEventListener监听事件对象，这里是监听'scroll'，即滚动条的事件对象，如果滚动条变化，则触发handleScroll函数
		  window.addEventListener('scroll', this.handleScroll) 
		},
		
	}
</script>

<style lang="stylus" scoped>
	.back{
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: .8rem;
		height: .8rem;
		line-height: .8rem;
		border-radius: .4rem;
		text-align: center;
		background: rgba(0, 0, 0, .8);
		color: #fff;
	}
	.fixed-header{
		color:#fff;
		position:fixed;	/* 本来是absolute */
		top: 0;
		left: 0;
		right: 0;
		text-align:center;
		height:.86rem;
		background: #00bcd4;
		line-height:.86rem;
		font-size: .32rem;
		z-index: 2;
	}
	.fixed-back{
		position:absolute;
		left:0;
		color:#fff;
		
	}	
</style>
