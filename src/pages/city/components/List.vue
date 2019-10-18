<template>
  <div class="list" ref="wrapper">
    <!-- ref；便于获取DOM元素，如这里用this.$refs.wrapper获取 -->
    <div>
      <!-- better-scroll插件要求包裹 -->
      <div>
        <div class="title">当前城市</div>
        <div class="item-button">
          <div class="button">{{this.$store.state.city}}</div>
        </div>

      </div>
      <div>
        <div class="title">热门城市</div>
        <div class="item-button">
          <div class="button" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>
      <!-- 第一层嵌套： {"A":[...],"B":[...],"C":[...]} -->
      <div v-for="(item,key) of cities" :key="key" :ref="key">
        <!-- 注意看好对应json里的值 key指"A" "B"...-->
        <div class="title">{{key}}</div>
        <!-- 第二层嵌套:[{id:...,spell:...,name:...},{id:...,spell:...,name:...},{id:...,spell:...,name:...},..] -->
        <div class="item-button" v-for="li of item" :key="li.id" @click="handleCityClick(li.name)">
          <!-- 为什么在这而不是在下面的li循环？->看控制台看结构 -->
          <ul>
            <!-- 这个border-bottom是插件里的 -->
            <li class="list-li border-bottom">{{li.name}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Bscroll from 'better-scroll' //引入better-scroll插件
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      leet: String
    },
    // computed: {
    //   ...mapState({
    //     currentCity: 'city'
    //   })
    // },
    computed:mapState({
      currentCity: 'city'
    }),
    mounted() { //生命周期函数
      // setTimeout(() => {  //better-scroll插件用法
      //   if(!this.scroll){
      //     this.scroll = new Bscroll(this.$refs.wrapper,{  //配置项：允许点击
      //       click: true,
      //     })
      //   }else{
      //     this.scroll.refresh();  //dom接口改变时
      //   }
      //   console.log(this.scroll)
      // }, 20)
      this.$nextTick(function(){
        this.scroll = new Bscroll(this.$refs.wrapper,{  //配置项：允许点击
          click: true,
        })
        console.log(this.scroll)
      })
      
    },
    updated() {
      console.log('updated:',this.cities)
    },
    watch: { //监听事件
      leet() { //如果leet变化，则触发该函数
        if (this.leet) { //如果leet存在
          //逻辑：this.leet是子-父-子传过来的值：e.target.innnerText，是"A","B"...;$refs[this.leet]表示获取ref值为leet的元素
          const element = this.$refs[this.leet][0]
          this.scroll.scrollToElement(element)
        } //better-scroll插件提空的方法：让页面拖动到指定元素的位置，这里指element
      },
    },
    methods: {
      handleCityClick(city) {
        console.log('触发');
        this.$store.dispatch('changeCity', city) //派发出去一个叫changeCity的actions ，参数是city
        this.$router.push('/') //通过路由来进行跳转
      },

    }
  }
</script>

<style lang="stylus" scoped="scoped">
  .list {
    /* 没啥效果，但是如果不设置的话，插件的效果会出bug */
    overflow: hidden;
    /*插件bug */
    position: absolute;
    /* 在最上方 */
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    background: #eee;
    padding-left: .2rem;
    line-height: .54rem;
    font-size: .26rem
  }

  .item-button {
    overflow: hidden; //BFC
    padding: .1rem .6rem .1rem .1rem;
  }

  .button {
    margin: .1rem;
    width: 25%;
    float: left;
    padding: .1rem;
    border: .02rem solid #ccc;
    border-radius: .06rem;
    text-align: center
  }

  .list-li {
    line-height: .76rem;
    padding-left: .2rem;
    border-color: #ccc
  }
</style>
