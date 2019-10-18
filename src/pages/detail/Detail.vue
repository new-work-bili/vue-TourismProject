<template>
	<div>
		<DetailHeader :bannerImg="bannerImg"></DetailHeader>
		<ShowHeader></ShowHeader>
		<div class="content">
			<DetailList :list="list"></DetailList>
		</div>
	</div>	
</template>

<script>
	import DetailHeader from './components/Header'
	import ShowHeader from './components/ShowHeader'
	import DetailList from './components/List'
	import axios from "axios"
	
	
	export default{
		name:'Detail',
		components: {
			DetailHeader,
			ShowHeader,
			DetailList
		},
		data() {
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				list: []
			}
		},
		methods: { 
			getDetailInfo() {
				axios.get('/static/mock/detail.json',{
					params:{
						id: this.$route.params.id	//到路由里取到对应的id值
					}
				})	.then(this.handleGetDataSucc)
			},
			handleGetDataSucc(res){
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted (){
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.content{
		height:75rem
	}
</style>
