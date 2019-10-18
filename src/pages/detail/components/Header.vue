<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img :src="bannerImg" alt="" class="banner-img">	<!-- 记住是:src 要有冒号 -->
			<div class="banner-info">
				<div class="banner-title">aaaaa景区 </div>
				<div class="banner-number">39</div>
			</div>
		</div>
		<CommonGallarty v-show="showGallary" @close="closeBannerClick"></CommonGallarty>
	</div>
</template>

<script>
	import CommonGallarty from '../../../common/gallart/Gallary.vue'	//引入公共组件，画廊滚播图
	
	export default{
		name:'DetailHeader',
		components:{
			CommonGallarty
		},
		props:{
			bannerImg:String
		},
		data() {
			return {
				showGallary: false
			}
		},
		methods: {
			handleBannerClick() {	//点击图片出现轮播图
				this.showGallary = true
			},
			closeBannerClick(){		//点击轮播图图片退出轮播图
				this.showGallary = false
			}
				
		},
	}
</script>

<style lang="stylus" scoped="scoped">
	.banner{
		overflow:hidden;
		height:0;
		padding-bottom:55%;	//比例撑开，防止加载时闪动
		background-color:red;
		position: relative
	}
	.banner-img{
		width:100%;
	}
	.banner-info{
		display: flex
		position: absolute
		left: 0
		right: 0   /* 学习这种思想,left right都为0就自动在宽度上撑开了*/
		bottom: 0
		line-height: .6rem
		color: #fff
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
	}
	.banner-title{
		flex: 1
		font-size: .32rem
		padding: 0 .2rem
	}
	.banner-number{
		height: .32rem
		line-height: .32rem
		margin-top: .14rem
		padding: 0 .4rem
		border-radius: .2rem
		background: rgba(0, 0, 0, .8)
		font-size: .24rem
	}
</style>
