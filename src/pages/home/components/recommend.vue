<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link 
			tag='li'
			:to="'/detail/' + item.id"
			class="item border-bottom" 
			v-for="item of list" 
			:key='item.id'>
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" alt="" class="item-img">	
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="itme-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	name:'HomeRecommend',
	props:{
		list:Array
	}
	/* data(){
		return{
			recomList:[{
				id:'01',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'02',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'03',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'04',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'05',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'06',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'07',
				src:'//s.qunarzz.com/touch_home/imgs/holiday.png',
				title:'日本旅游',
				desc:'日本旅游东京'
			},]
		}
	} */
}	
</script>

<style lang="stylus" scoped>
	.title{
		margin-top: .2rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;	/* 缩进 */
	}
	.item{
			
		display: flex;	/* 整个父级上添加flex */
		height: 1.9rem;
		overflow: hidden;
	}
	.item-img{
		width: 1.7rem;	/*这次用的是定长 */
		height: 1.7rem;
		padding: .1rem;
	}
	.item-info{	
		flex: 1;		/* ？ */
		padding: .1rem;
		min-width: 0;
	}
	.item-title{
		line-height: .54rem;
		font-size: .32rem
	}
	.itme-desc{
			line-height: .4rem;
			color: #ccc;
	}
	.item-button{
		line-height: .44rem;
		margin-top: .16rem;
		background: #ff9300;
		padding: 0 .2rem;
		border-radius: .06rem;
		color: #fff;
	}
</style>
