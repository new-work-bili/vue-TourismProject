<template>
	<!-- 模板，引用时，引用的就是这里的内容 -->
	<div>	<!-- template下只能有一个根标签 -->
		<HomeHeader :city='city'></HomeHeader>	<!-- 父级想子级传值通过绑定数据属性，然后再在子级用props接收 -->
		<HomeSwiper :list='swiperList'></HomeSwiper>
		<Icons :list='iconList'></Icons>
		<HomeRecommend :list='recommendList'></HomeRecommend>
		<Homeweekend :list='weekendList'></Homeweekend>
	</div>
	
</template>

<script>
	import HomeHeader from './components/header'	//要加./
	import HomeSwiper from './components/swiper'
	import Icons from './components/icons'
	import HomeRecommend from './components/recommend'
	import Homeweekend from './components/weekend'
	import axios from "axios"
	/* import { mapState } from 'vuex' */
	
export default{		//设置引用该组件时，该组件的名字
	name:'Home',
	components:{	//因为是局部组件注册组件
		HomeHeader,	//es6:相当于HomeHeader:HomeHeader
		HomeSwiper,
		Icons,
		HomeRecommend,
		Homeweekend
	},
	data () {
		return{
			city:''	,//HomeHeader城市名字
			swiperList:[],	//HomeSwiper轮播图数据
			iconList: [],
			recommendList: [],
			weekendList: [],
			lastCity:''		//指的是上次选择的城市
		}
	},
	methods:{	//专门放方法的 
		getHomeInfo () {
			//请求一个url，this.$store.state.city是vuex下state保存的数据
			axios.get('/static/mock/index.json?city=' + this.$store.state.city)	
			.then(this.getHomeInfoSucc)	//axios返回的是一个promise对象，这里then下一步
	},
		getHomeInfoSucc(res){	//如果获取成功，打印这个请求结果；res
			res = res.data	//优化，方便
			if(res.ret && res.data){	//判断ret==true? 和 res.data书否存在
				const data = res.data	//优化，方便
				/* this.city = data.city */
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
			console.log(res)
		}
	},
	mounted (){	//这个钩子常用在ajax请求数据时
		this.getHomeInfo()	//当将编译完成的HTML挂载到页面时，执行这个函数
		this.lastCity = this.$store.state.city	//保存一下上次选择的城市
	},
	activated () {	//使用keep-alive后新增的钩子，只要进入当前页面就会触发，会多次出发
	  if (this.lastCity !== this.$store.state.city) {	//如果这次选择的不是上次的城市   
		this.lastCity = this.$store.state.city
	    this.getHomeInfo()	//那么就重新发一次ajax请求
	  }
	}
	}
</script>

<style>
</style>
