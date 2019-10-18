<template>
  <!-- template下只能只包含一个根元素。如果您在多个元素上使用v-if，请使用v-else-if来链接它们。有 -->
  <div class="wra">
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hot="hotCities" :leet="leet"></CityList>
    <CityA :cities="cities" @change='changF'></CityA>
  </div>

</template>

<script>
  import CityHeader from '../city/components/Header.vue'
  import CitySearch from '../city/components/Search.vue'
  import CityList from '../city/components/List.vue'
  import CityA from '../city/components/Alphabet.vue'
  import axios from "axios"


  export default {
    name: 'City',
    components: { //注册组件
      CityHeader,
      CitySearch,
      CityList,
      CityA
    },
    data() {
      return {
        cities: {}, //城市列表数据,搜索时也要用
        hotCities: [], //热门城市列表数据
        leet: '' //定义，以便赋值
      }
    },
    methods: {
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
        console.log(res)
      },
      changF(leet) {
        this.leet = leet //把子组件传过来的参数赋值到本组件
      }
    },
    mounted() {
      this.hetCityInfo()
    }
  }
</script>

<style lang="stylus" scoped="scoped">
  // .wra{
  //   height 100%;
  // }
</style>
