<template>
	<!-- 复制 -->
	<div class="wrapper">
		<swiper :options="swiperOption" v-if='list.length'>		<!-- 解决刚开始显示的是轮播图最后一张的问题： -->
			<swiper-slide v-for="item of list" :key="item.id">	<!-- 循环列表 -->
			  <img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
		
</template>

<script>
export default{		//定义组件名字
	name: 'HomeSwiper',
	props:{
		list:Array	//不是list:'swiperList'
	},
	data () {
      return {
        swiperOption: {		//配置选项：设置一些默认值
					pagination: '.swiper-pagination',//添加下面的点
					loop: true			//页面可循环
        },
				
      }
    }
}
</script>

<style lang="stylus" scoped>	//lang='stylus' 表示引用刚刚的依赖包;scoped表示只对该组件有效
	.wrapper >>> .swiper-pagination-bullet-active//意思是强制设置，打破scoped的效果，作用到外部文件，这里是改变下面点的颜色
	  background: #fff
	.wrapper    ////把div高度撑开
	  overflow: hidden
	  width: 100%
	  height: 0
	  padding-bottom: 31.25%
	  background: #eee
	.swiper-img{
		width:100%
	}
</style>
