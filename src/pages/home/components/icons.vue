<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<!-- 循环的不是iconList而是page -->
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-imgconten" :src='item.imgUrl' alt="">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'Icons',
		props:{
			list:Array
		},
		//!!!计算属性,当图标超过8格时，将剩下的放到轮播图下一页
		computed:{
			pages () {
			  const pages = []
			  this.list.forEach((item, index) => {	//遍历列表并获取到具体的循环项item，对应下标
			    const page = Math.floor(index / 8)	//这个page是页码，用来表示index下标对应循环项应该放在第几页
													//注意：index是从0开始的，即index=8，也就是第9个循环项
			    if (!pages[page]) {	//如果pages的第page项不存在
			      pages[page] = []
			    }
			    pages[page].push(item)	//把列表的循环项push到pages数组的第page项；也就是因为这里上面.icon里的v-for不是循环的iconList了，而是循环page了
										//之后会发现pages会是个二维数组，因为前8个循环项都被放到下标为page=0下了，后面的放在下标为page=1下
			  })
			  return pages
			}
		},
		data (){
			return{
				swiperOption:{	//轮播图的配置
					autoplay: false	//不..
				}
				/* iconList:[{
					id:'01',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},
				{
					id:'02',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'03',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'04',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'05',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'06',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'07',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},{
					id:'08',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				},,{
					id:'09',
					iconUrl:'//s.qunarzz.com/touch_home/imgs/holiday.png',
					decs:'123'
				}] */
			}
		}
	}
</script>

<style lang="stylus" scoped>	/* 搞懂:下面的演示几乎都是靠比例写的 */
	.icons >>> .swiper-container{	/* 用scoped限制了css的作用范围，要修改轮播图插件的样式，需要用到 ’>>>‘ */
		height: 0;
		padding-bottom: 50%;
	}
	  
	.icons{
		height: 0;
		padding-bottom: 50%;	/* 经常用到的：让这个div以宽高2:1的比例撑开 */
		/* background: red; */
	}
	.icon{
		position: relative;	/* 为icon-img的绝对定位提供定位父级 */
		overflow: hidden;
		float: left;	/*  */
		width: 25%;		/*  */
		height: 0;
		padding-bottom: 25%;
	}
	.icon-img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: .44rem;		/* 这0.44是留给p标签里的文字的 */
		box-sizing: border-box;	/*  */
		padding: .1rem;
		
	}
	.icon-imgconten{
		display: block;
		margin: 0 auto;
		height: 100%;	/* 间接设置了图片大小 */
	}
	  
	
	.icon-desc{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: .44rem;
		line-height: .44rem;
		text-align: center;
	}
</style>
