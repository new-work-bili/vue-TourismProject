webpackJsonp([1],{"/mWh":function(t,e){},"1S+3":function(t,e){},"5F/x":function(t,e){},"5jGf":function(t,e){},"9n10":function(t,e){},Auxu:function(t,e){},IeOd:function(t,e){},L6fn:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},N1vn:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("1S+3")},null,null).exports,r=i("/ocq"),o=i("GQaK"),c={name:"CitySearch",props:{cities:Object,keyword:""},data:function(){return{timer:null,list:[],slotClass:"",data_keyword:this.keyword}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e,console.log("list:",t.list),console.log("cities:",t.cities)},100):this.list=[]}},methods:{handleCityClick:function(t){this.$store.dispatch("changeCity",t),this.data_keyword="",this.$emit("data_keyword",this.data_keyword),this.$router.push("/")}},mounted:function(){this.scroll=new o.a(this.$refs.search,{click:!0}),console.log("cities:",this.cities)}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default"),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])],2)},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("cRK2")},"data-v-c698da6e",null).exports,u=i("mtWM"),h=i.n(u),p={name:"HomeHeader",components:{search:d},props:{city:String},data:function(){return{isShow:!0,isHidden:!1,cities:{},hotCities:"",keyword:""}},methods:{clickShow:function(){this.isShow=!this.isShow,this.isHidden=!this.isHidden},hetCityInfo:function(){h.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},data_keyword:function(t){this.keyword=t},back:function(){this.keyword=""}},mounted:function(){this.hetCityInfo()}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-left",on:{click:t.back}},[i("div",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("search",{staticClass:"header-top",attrs:{cities:t.cities,keyword:t.keyword},on:{data_keyword:t.data_keyword}},[i("div",{staticClass:"search_input"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])]),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n\t\t\t\t"+t._s(this.$store.state.city)+"  "),t._v(" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[]};var v=i("VU/8")(p,f,!1,function(t){i("q1Hw")},"data-v-7ff29d35",null).exports,m={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.list.length?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var w=i("VU/8")(m,_,!1,function(t){i("/mWh")},"data-v-e20a58c6",null).exports,y={name:"Icons",props:{list:Array},
//!!!计算属性,当图标超过8格时，将剩下的放到轮播图下一页
computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}},data:function(){return{swiperOption:{autoplay:!1}}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-imgconten",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var g=i("VU/8")(y,C,!1,function(t){i("N1vn")},"data-v-28fde32f",null).exports,k={name:"HomeRecommend",props:{list:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"itme-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var S=i("VU/8")(k,b,!1,function(t){i("WfX8")},"data-v-14ab87ec",null).exports,x={name:"Homeweekend",props:{list:Array}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"itme-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var H={name:"Home",components:{HomeHeader:v,HomeSwiper:w,Icons:g,HomeRecommend:S,Homeweekend:i("VU/8")(x,$,!1,function(t){i("U+Eu")},"data-v-5945ba7a",null).exports},data:function(){return{city:"",swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},methods:{getHomeInfo:function(){h.a.get("/static/mock/index.json?city="+this.$store.state.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.getHomeInfo(),this.lastCity=this.$store.state.city},activated:function(){this.lastCity!==this.$store.state.city&&(this.lastCity=this.$store.state.city,this.getHomeInfo())}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HomeHeader",{attrs:{city:t.city}}),t._v(" "),i("HomeSwiper",{attrs:{list:t.swiperList}}),t._v(" "),i("Icons",{attrs:{list:t.iconList}}),t._v(" "),i("HomeRecommend",{attrs:{list:t.recommendList}}),t._v(" "),i("Homeweekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var L=i("VU/8")(H,I,!1,function(t){i("S8eY")},null,null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("List")])},staticRenderFns:[]};var F=i("VU/8")({name:"List"},E,!1,function(t){i("aI06")},null,null).exports,O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n\t城市选择\n\t"),e("router-link",{staticClass:"iconfont back",attrs:{to:"/"}},[this._v("")])],1)},staticRenderFns:[]};var U=i("VU/8")({name:"CityHeader"},O,!1,function(t){i("Auxu")},"data-v-6e902eba",null).exports,R={name:"CitySearch",components:{search:d},props:{cities:Object},data:function(){return{keyword:"",timer:null,list:[]}},watch:{},methods:{data_keyword:function(t){this.keyword=t}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("search",{attrs:{cities:t.cities,keyword:t.keyword},on:{data_keyword:t.data_keyword}},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])])],1)},staticRenderFns:[]};var V=i("VU/8")(R,T,!1,function(t){i("PqIx")},"data-v-1f225522",null).exports,N=i("NYxO"),j={name:"CityList",props:{hot:Array,cities:Object,leet:String},computed:Object(N.b)({currentCity:"city"}),mounted:function(){this.$nextTick(function(){this.scroll=new o.a(this.$refs.wrapper,{click:!0}),console.log(this.scroll)})},updated:function(){console.log("updated:",this.cities)},watch:{leet:function(){if(this.leet){var t=this.$refs[this.leet][0];this.scroll.scrollToElement(t)}}},methods:{handleCityClick:function(t){console.log("触发"),this.$store.dispatch("changeCity",t),this.$router.push("/")}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",[i("div",{staticClass:"title"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"item-button"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",[i("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"item-button"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0},[i("div",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-button",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("ul",[i("li",{staticClass:"list-li border-bottom"},[t._v(t._s(e.name))])])])})],2)})],2)])},staticRenderFns:[]};var G=i("VU/8")(j,A,!1,function(t){i("L6fn")},"data-v-60c0e4ce",null).exports,q={name:"CityA",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},computed:{leet:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{Aclick:function(t){this.$emit("change",t.target.innerText),console.log(this.leet)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.leet.length&&e.$emit("change",e.leet[s])},10))},handleTouchEnd:function(){this.touchStatus=!1}},updated:function(){this.startY=this.$refs.A[0].offsetTop}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.cities,function(e,s){return i("li",{key:s,ref:s,refInFor:!0,staticClass:"li",on:{click:t.Aclick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(s))])}),0)},staticRenderFns:[]};var M={name:"City",components:{CityHeader:U,CitySearch:V,CityList:G,CityA:i("VU/8")(q,D,!1,function(t){i("w9wK")},"data-v-3f31e732",null).exports},data:function(){return{cities:{},hotCities:[],leet:""}},methods:{hetCityInfo:function(){h.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}console.log("res:",t)},changF:function(t){this.leet=t}},mounted:function(){this.hetCityInfo()}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wra"},[i("CityHeader"),t._v(" "),i("CitySearch",{attrs:{cities:t.cities}}),t._v(" "),i("CityList",{attrs:{cities:t.cities,hot:t.hotCities,leet:t.leet}}),t._v(" "),i("CityA",{attrs:{cities:t.cities},on:{change:t.changF}})],1)},staticRenderFns:[]};var P=i("VU/8")(M,Y,!1,function(t){i("IeOd")},"data-v-7d3416f6",null).exports,B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleBannerClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[e("swiper-slide",[e("img",{staticClass:"gallary-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",alt:""}})]),this._v(" "),e("swiper-slide",[e("img",{staticClass:"gallary-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png",alt:""}})]),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)])},staticRenderFns:[]};var z={name:"DetailHeader",components:{CommonGallarty:i("VU/8")({name:"CommonGallarty",data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleBannerClick:function(){this.$emit("close")}}},B,!1,function(t){i("dLnS")},"data-v-71e26b79",null).exports},props:{bannerImg:String},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},closeBannerClick:function(){this.showGallary=!1}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"banner",on:{click:this.handleBannerClick}},[e("img",{staticClass:"banner-img",attrs:{src:this.bannerImg,alt:""}}),this._v(" "),this._m(0)]),this._v(" "),e("CommonGallarty",{directives:[{name:"show",rawName:"v-show",value:this.showGallary,expression:"showGallary"}],on:{close:this.closeBannerClick}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[this._v("aaaaa景区 ")]),this._v(" "),e("div",{staticClass:"banner-number"},[this._v("39")])])}]};var K=i("VU/8")(z,W,!1,function(t){i("5F/x")},"data-v-28ccfb7a",null).exports,Q={name:"ShowHeader",data:function(){return{showOne:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){this.showOne=!1;var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.showOne=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showOne,expression:"showOne"}],staticClass:"back",attrs:{to:"/",tag:"div"}},[this._v("返回")]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showOne,expression:"!showOne"}],staticClass:"fixed-header",style:this.opacityStyle},[this._v("\n\t\t景点详情\n\t\t"),e("router-link",{staticClass:"fixed-back",attrs:{to:"/"}},[this._v("返回")])],1)],1)},staticRenderFns:[]};var J=i("VU/8")(Q,X,!1,function(t){i("qw8Y")},"data-v-521a81da",null).exports,Z={name:"DetailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(" "),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var et={name:"Detail",components:{DetailHeader:K,ShowHeader:J,DetailList:i("VU/8")(Z,tt,!1,function(t){i("qgqt")},"data-v-5ba93169",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){h.a.get("/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DetailHeader",{attrs:{bannerImg:this.bannerImg}}),this._v(" "),e("ShowHeader"),this._v(" "),e("div",{staticClass:"content"},[e("DetailList",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("5jGf")},"data-v-00c1a986",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:P},{path:"/list",name:"List",component:F},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=(i("9n10"),i("M6Sr"),i("v5o6")),rt=i.n(at),ot=(i("muQq"),i("F3EI")),ct=i.n(ot);i("v2ns");s.a.use(N.a);try{localStorage.city&&localStorage.city}catch(t){}var lt=new N.a.Store({state:{city:localStorage.city||"北京"},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}}});i("j1ja");rt.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(ct.a),new s.a({el:"#app",router:nt,components:{App:a},template:"<App/>",store:lt})},PqIx:function(t,e){},S8eY:function(t,e){},"U+Eu":function(t,e){},WfX8:function(t,e){},aI06:function(t,e){},cRK2:function(t,e){},dLnS:function(t,e){},muQq:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},q1Hw:function(t,e){},qgqt:function(t,e){},qw8Y:function(t,e){},v2ns:function(t,e){},w9wK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.128dd3b4d7628442185e.js.map