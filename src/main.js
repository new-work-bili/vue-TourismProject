// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastCilck from 'fastclick'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index.js'
import 'babel-polyfill'

fastCilck.attach(document.body)

Vue.config.productionTip = false	//声明不是生产环境
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({	//实例化vue
  el: '#app',
  router,	
  components: { App },
  template: '<App/>',
  store
})
