<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont">&#xe6b7;</div>
		</div>
    <search class="header-top" :cities="cities" :keyword="keyword" @data_keyword="data_keyword">
      <div class="search_input">
        <i class="iconfont">&#xe632;</i>
        <input type="text" placeholder="输入城市/景点/游玩主题" v-model="keyword">
      </div>
    </search>
		<router-link to='/city'>
			<div class="header-right">
				{{this.$store.state.city}}  <!-- 使用vuex里的数据;state:{city:'北京'},-->
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
  import search from '../../slot/searchSlot.vue'
  import axios from "axios"
export default{		//定义组件名字
	name: 'HomeHeader',
  components:{
    search
  },
	props:{				//通过props接收父组件传过来的值
		city:String,
	},
  data(){
    return{
      isShow:true,
      isHidden:false,
      cities:{},
      hotCities:'',
      keyword:''
    }
  },
  methods:{
    clickShow(){
      this.isShow = !this.isShow
      this.isHidden = !this.isHidden
    },
    hetCityInfo() {
      axios.get('/static/mock/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    data_keyword(word){
      this.keyword = word
    }
  },
  mounted() {
    this.hetCityInfo()
  },
}
</script>

<style lang="stylus" scoped>	//lang='stylus' 表示引用刚刚的依赖包;scoped表示只对该组件有效,防止污染
	.header{
		height:.86rem
		line-height:.86rem
		display:flex
		background:#00bcd4
		color:#fff
	}
	.header-left{
		width:.64rem
		float:left
	}
  .header-left > div{
    font-size .6rem
    padding-left .08rem
  }
	.header-top{
		flex: 1
		height: .63rem
		line-height: .63rem
		margin-top: .12rem
		margin-left: .2rem
		padding-left: .2rem
		background: #fff
		border-radius: .1rem
		color: #ccc
	}
  .search_input{
    align-items center
    width 100%
  }
  .search_input> input{
    width:86%
    height:.63rem
    line-height:.63rem
    vertical-align baseline
  }
	.header-right{
		min-width: 1.04rem;	//最小宽度为1.04rem
		padding: 0 .1rem
		float: right
		text-align: center
		color: #fff
	}

</style>
