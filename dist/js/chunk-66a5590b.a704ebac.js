(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66a5590b"],{"0028":function(t,a,n){"use strict";var e=n("21f0"),s=n.n(e);s.a},"21f0":function(t,a,n){},3400:function(t,a,n){},5236:function(t,a,n){},"5a81":function(t,a,n){"use strict";var e=n("8656"),s=n.n(e);s.a},"5c0b":function(t,a,n){},"6ab7":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.gallaryImgs}}),n("detail-header"),n("div",{staticClass:"content"},[n("detail-list",{attrs:{list:t.list}})],1)],1)},s=[],i=n("bc3a"),r=n.n(i),l=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[n("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),n("div",{staticClass:"banner-info"},[n("div",{staticClass:"banner-tittle"},[t._v(t._s(this.sightName))]),n("div",{staticClass:"banner-number"},[n("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),n("fade-animation",[n("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},o=[],c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container",on:{click:t.handleGallaryClick}},[n("div",{staticClass:"wrapper"},[n("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.imgs,function(t,a){return n("swiper-slide",{key:a},[n("img",{staticClass:"gallary-img",attrs:{src:t}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},u=[],d={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},m=d,h=(n("b702"),n("2877")),f=Object(h["a"])(m,c,u,!1,null,"48107786",null),v=f.exports,b=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("transition",[t._t("default")],2)},p=[],g={name:"FadeAnimation"},w=g,y=(n("ac14"),Object(h["a"])(w,b,p,!1,null,"4cd286ae",null)),C=y.exports,_={name:"DetailBanner",components:{CommonGallary:v,FadeAnimation:C},props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},I=_,k=(n("5a81"),Object(h["a"])(I,l,o,!1,null,"2f411b43",null)),G=k.exports,A=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[n("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("\n    景点详情\n  ")],1)],1)},x=[],D={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var a=t/140;a=a>1?1:a,this.opacityStyle={opacity:a},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},N=D,S=(n("77a2"),Object(h["a"])(N,A,x,!1,null,"ff7f51a0",null)),E=S.exports,O=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",t._l(t.list,function(a,e){return n("div",{key:e,staticClass:"item"},[n("div",{staticClass:"item-title border-bottom"},[n("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(a.title)+"\n    ")]),a.children?n("div",{staticClass:"item-chilren"},[n("detail-list",{attrs:{list:a.children}})],1):t._e()])}),0)},$=[],j={name:"DetailList",props:{list:Array}},L=j,B=(n("0028"),Object(h["a"])(L,O,$,!1,null,"7b6922cb",null)),F=B.exports,H={name:"Detail",components:{DetailBanner:G,DetailHeader:E,DetailList:F},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){r.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if(t=t.data,t.ret&&t.data){var a=t.data;this.sightName=a.sightName,this.bannerImg=a.bannerImg,this.gallaryImgs=a.gallaryImgs,this.list=a.categoryList}}},mounted:function(){this.getDetailInfo()}},J=H,T=(n("7ef0"),Object(h["a"])(J,e,s,!1,null,"f2871658",null));a["default"]=T.exports},"77a2":function(t,a,n){"use strict";var e=n("5c0b"),s=n.n(e);s.a},"7ef0":function(t,a,n){"use strict";var e=n("3400"),s=n.n(e);s.a},8656:function(t,a,n){},a812:function(t,a,n){},ac14:function(t,a,n){"use strict";var e=n("a812"),s=n.n(e);s.a},b702:function(t,a,n){"use strict";var e=n("5236"),s=n.n(e);s.a}}]);