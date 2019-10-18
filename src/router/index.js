import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'	//引入组件，最后的.vue也可以不谢
import List from '@/pages/list/List.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',/* 这两行当访问根路径（网址时时，就去访问Home组件 */
      name: 'Home', 	//给该路由项起名字为Home
      component: Home	//引入的组件名是Home
    },
		{
			path: '/city',	/* 当访问http://localhost:8080/#/city时，就去访问City组件  */
			name: 'City', 	
			component: City
		},
		{
		  path: '/list',//当访问/list时，就去访问List组件
		  name: 'List', 	
		  component: List	
		},
		{
		  path: '/detail/:id',	//动态路由：访问该网址对应id号,
		  name: 'Detail',
		  component: Detail
		},
  ],
	//只要做路由切换，都让切换的页面x,y轴的显示的初始位置都为0
	scrollBehavior (to, from, savedPosition) {		
		return { x: 0, y: 0 }
	}
})
//router:路由
//路由就是根据网址的不同,返回不同的内容给用户