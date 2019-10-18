<template>
	<div class="container" @click="handleBannerClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
				<swiper-slide>
					<img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" alt="" class="gallary-img">
				</swiper-slide>
				<swiper-slide>
					<img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CommonGallarty',
		data () {
		  return {
		    swiperOptions: {	//轮播图的配置项：<swiper :options="swiperOptions">
		      pagination: '.swiper-pagination',//指定class名为.swiper-pagination的元素作为轮播图的页码
		      paginationType: 'fraction',	//轮播图类型
		      observeParents: true,
		      observer: true,//当监听到父级dom元素改变时，会进行自我刷新;防止出现bug
		    }
		  }
		},
		methods: {
			handleBannerClick() {
				this.$emit('close')	//向父组件触发事件
			}
		},
	}
</script>

<style lang="stylus" scoped="scoped">
	.container >>> .swiper-container{
		overflow: inherit
	}
	  
	.container{
		display: flex;
		flex-direction: column;
		justify-content: center;	/* 这两行子级上下左右居中 */
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #000;			
	}
	.wrapper{
		height: 0
		width: 100%
		padding-bottom: 100%
	}
	.gallary-img{
		width: 100%
	}
	.swiper-pagination{	//页码的样式
		color: #fff
		bottom: -1rem
	}
	  
	
</style>
