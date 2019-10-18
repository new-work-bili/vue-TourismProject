<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key='item.id'>
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" alt="" class="item-img">	
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="itme-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'Homeweekend',
	props:{
		list:Array
	}
	/* data(){
		return{
			weekendList:[{
				id:'01',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'02',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'03',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'04',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'05',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'06',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},{
				id:'07',
				src:'//img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg',
				title:'日本旅游',
				desc:'日本旅游东京'
			},]
		}
	} */
}
</script>

<style lang="stylus" scoped>	/* 别忘了scope */
	.title{
		margin-top: .2rem;
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;	/* 缩进 */
	}
	.item{
		/* height: 1.9rem; */		/* 为什么取消高得设置 */
		overflow: hidden;
	}
	.item-img-wrapper{	/* 在图片父级的div设置长宽比 */
		overflow: hidden;
		height: 0;
		padding-bottom: 30%;
	}
	.item-img{			/* 不在是定长 */
		width: 100%;
	}
	/* .item-img{
		width: 1.7rem;	
		height: 1.7rem;
		padding: .1rem;
	} */
	.item-info{	
		padding: .1rem;
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
