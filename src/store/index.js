import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try{
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch(e){
	//TODO handle the exception
}

export default new Vuex.Store({
  state:{	//调用的都是这里的数据
	  city:localStorage.city || '北京',	//优先使用localStorage数据，找不到时，再用默认的'北京'
  },
  actions:{		//接收派发出来的action
	  changeCity (ctx,city) {
		  ctx.commit('changeCity',city)	//通过commit方法执行mutations里changeCity方法，
	  },
  },
  mutations:{
	  changeCity (state,city){	//state就是上面那个state数据
		  state.city = city
			try{
		  	localStorage.city = city
		  }catch(e){
		  	//TODO handle the exception
		  }

	  }
  }
})
