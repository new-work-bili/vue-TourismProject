<template>
  <div>
    <slot></slot>
    <div class="search-content" ref="search" v-show="keyword">
      <!-- 只在keyword有值时，显示这个div -->
      <ul>
        <li v-for="item of list" class="search-item border-bottom" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
        <!-- 	当list的长度为0时，显示li -->
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll' //引入滚动插件

  export default {
    name: 'CitySearch',
    props: {
      cities: Object,
      keyword:''
    },
    data() {
      return {
        timer: null, //实现节流函数
        list: [], //最终这里的值会是一些如{"id": 1,"spell": "beijing","name": "北京"}的数组
        slotClass: '',
        data_keyword:this.keyword
      }
    },
    watch: { //监听变化
      keyword() {
        // alert(1);
        if (this.timer) {
          clearTimeout(this.timer) //节流1
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) { //for..in的i是冒号前面的东西，这里i="A"，"B"，..
            this.cities[i].forEach((value) => { //这里value指遍历出来的列表项，如：{"id": 1,"spell": "beijing","name": "北京"}
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                //indexOf() 如果匹配不到括号里的值，则返回-1；这里判断的都是>-1，表示匹配到了
                result.push(value) //则把匹配到的值push到数组里
              }
            })
          }
          this.list = result //把值传到外面
          console.log('list:', this.list)
          console.log('cities:', this.cities)
        }, 100) //节流2
      }
    },
    methods: {
      handleCityClick(city) {
        this.$store.dispatch('changeCity', city) //派发出去一个叫changeCity的actions ，参数是city
        this.data_keyword = ''
        this.$emit('data_keyword',this.data_keyword)
        this.$router.push('/') //通过路由来进行跳转
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search, {
        click: true,
      }) //使用滚动插件
      console.log('cities:', this.cities)
    },
  }
</script>

<style lang="stylus" scoped="scoped">
  .search-content {
    z-index: 10;
    overflow: hidden;
    position: absolute;
    top: 0.86rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }

  .search-item {
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
  }
</style>
