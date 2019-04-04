import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'	//引入组件，最后的.vue也可以不谢
import List from '@/pages/list/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',/* 这两行当访问根路径（网址时时，就去访问Home组件 */
      name: 'Home', 	//给该路由项起名字为Home
      component: Home	//引入的组件名是Home
    },
		{
		  path: '/list',//当访问/list时，就去访问List组件
		  name: 'List', 	
		  component: List	
		}
  ]
})
//router:路由
//路由就是根据网址的不同,返回不同的内容给用户