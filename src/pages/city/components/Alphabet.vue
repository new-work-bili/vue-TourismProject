<template>
	<ul class="list">
		<li
		 class="li" v-for="(item,key) of cities" 
		 :key="key"
		 @click="Aclick"
		 @touchstart="handleTouchStart"
		 @touchmove="handleTouchMove"
		 @touchend="handleTouchEnd"
		 :ref="key"
		>{{key}}</li>
	</ul>
</template>

<script>
	export default{
		name:'CityA',	//组件名
		props:{
			cities:Object
		},
		data (){
			return{
				touchStatus: false, //锁
				startY:0,
				timer:null	//延迟函数
			}
		},
		//计算属性
		computed:{
			leet(){	//作用：遍历A~Z，放到一个数组里
				const leet = []
				for (let i in this.cities){	//for.in遍历的对数组是index索引，对对象是key键值；都是冒号前面的东西
					leet.push(i)
				}
				return leet	
				//所以leet=["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]
			}
		},
		methods:{	
			Aclick(e){
				//emit是子-父传值的方法；e.target.innerText获取点击的文本
				this.$emit('change',e.target.innerText)//触发事件，让父组件监听,让点击的文本通过参数传给父组件
				console.log(this.leet);
			},
			handleTouchStart(){
				this.touchStatus=true
			},
			//实现拖滑字母表效果算法！！！
			handleTouchMove(e){
				if(this.touchStatus){	//只有在touchStatus为true的情况下做上下拖动的处理
					//const startY = this.$refs['A'][0].offsetTop	//求ref是A的元素距离父级顶部的距离：定值：74
					if(this.timer){
						clearTimeout(this.timer)	//当timer这个延迟器存在，那就清除它
					}
					this.timer = setTimeout(() => {
						const touchY = e.touches[0].clientY - 79	//79是搜索框和头部的高度
						//e.touches[0] 指获取手指数据 .clientY 获取手指Y轴；
						const index = Math.floor((touchY-this.startY)/20) //给每一个滑到的字母元素都有一个索引
						//touchY-startY指滑到的字母元素距离"A"元素的Y轴距离；20是每个字母元素的高度
						if(index >= 0 && index < this.leet.length){	//让index在规定范围内
							this.$emit('change',this.leet[index])
							//touchY变化--index变--leet[index]变；从而达到滑到那，传那个值的效果
						}
					},10)	//10毫秒之后再执行
				}
			},
			handleTouchEnd(){
				this.touchStatus=false
			}
			
		},
		updated() {	//页面完成自己的渲染之后，并且数据更新时触发这个钩子
			this.startY = this.$refs['A'][0].offsetTop
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.list{
		display:flex;
		flex-direction: column;
		justify-content: center;	/* 使列表项垂直居中 */
		
		position:absolute;
		top:1.58rem;	/* ！top的值正好是上面搜索组件的高度这里间接设置了list的高的长度 */
		bottom: 0;
		
		right:0;
		width:.4rem
	}
	.li{
		line-height: .4rem;
		text-align:center;
		color:#333;
	}
</style>
