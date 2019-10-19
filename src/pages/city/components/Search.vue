<template>
  <div>
    <search :cities="cities" :keyword="keyword" @data_keyword="data_keyword">
      <div class="search">
        <input type="text" placeholder="请输入城市名" class="search-input" v-model="keyword">
      </div>
    </search>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll' //引入滚动插件
  import search from '../../slot/searchSlot.vue'
  export default {
    name: 'CitySearch',
    components:{
      search
    },
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        timer: null, //实现节流函数
        list: [] //最终这里的值会是一些如{"id": 1,"spell": "beijing","name": "北京"}的数组
      }
    },
    watch: { //监听变化

    },
    methods: {
      data_keyword(word){
        this.keyword = word
      }
    },

  }
</script>

<style lang="stylus" scoped="scoped">
  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: #00bcd4;
  }


  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: .63rem;
    padding: 0 .1rem;
    line-height: .63rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
  }



  div >>> .search-content { /* 穿透scoped*/
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
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
