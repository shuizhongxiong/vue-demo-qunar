(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7215bf8e"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),c=n("6821"),o=n("6a99"),s=n("69a8"),a=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=c(t),e=o(e,!0),a)try{return u(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,c=r(i)&&r(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},"286e":function(t,e,n){},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"416e":function(t,e,n){},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",function(){return function(t){return i(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),c=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*c(function(){n(1)}),"Object",o)}},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),c=n("d864"),o=n("35e8"),s=n("07e3"),a="prototype",u=function(t,e,n){var f,l,p,d=t&u.F,m=t&u.G,v=t&u.S,b=t&u.P,y=t&u.B,h=t&u.W,w=m?i:i[e]||(i[e]={}),g=w[a],O=m?r:v?r[e]:(r[e]||{})[a];for(f in m&&(n=e),n)l=!d&&O&&void 0!==O[f],l&&s(w,f)||(p=l?O[f]:n[f],w[f]=m&&"function"!=typeof O[f]?n[f]:y&&l?c(p,r):h&&O[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(p):b&&"function"==typeof p?c(Function.call,p):p,b&&((w.virtual||(w.virtual={}))[f]=p,t&u.R&&g&&!g[f]&&o(g,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"659e":function(t,e,n){"use strict";var r=n("c297"),i=n.n(r);i.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},7973:function(t,e,n){"use strict";var r=n("bcbc"),i=n.n(r);i.a},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){var r=n("5ca1"),i=n("990b"),c=n("6821"),o=n("11e9"),s=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),a=o.f,u=i(r),f={},l=0;while(u.length>l)n=a(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"990b":function(t,e,n){var r=n("9093"),i=n("2621"),c=n("cb7c"),o=n("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),c=n("2aba"),o=n("7726"),s=n("32e9"),a=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(d),v=0;v<m.length;v++){var b,y=m[v],h=d[y],w=o[y],g=w&&w.prototype;if(g&&(g[f]||s(g,f,p),g[l]||s(g,l,y),a[y]=p,h))for(b in r)g[b]||c(g,b,r[b],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-header"),n("home-swiper",{attrs:{list:t.swiperList}}),n("home-icons",{attrs:{list:t.iconList}}),n("home-recommend",{attrs:{list:t.recommendList}}),n("home-weekend",{attrs:{list:t.weekendList}})],1)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),t._m(1),n("router-link",{attrs:{to:"city"}},[n("div",{staticClass:"header-right"},[t._v("\n      "+t._s(this.city)+"\n      "),n("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-input"},[n("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n    输入城市/景点/游玩主题\n  ")])}],a=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var l={name:"HomeHeader",computed:f({},Object(a["c"])(["city"]))},p=l,d=(n("c9d1"),n("2877")),m=Object(d["a"])(p,o,s,!1,null,"7dc12c5a",null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.showSwiper?n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return n("swiper-slide",{key:t.id},[n("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},y=[],h={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3}}},computed:{showSwiper:function(){return this.list.length}}},w=h,g=(n("659e"),Object(d["a"])(w,b,y,!1,null,"c7e54ba8",null)),O=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,r){return n("swiper-slide",{key:r},t._l(e,function(e){return n("div",{key:e.id,staticClass:"icon"},[n("div",{staticClass:"icon-img"},[n("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),n("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},j=[],L={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,n){var r=Math.floor(n/8);t[r]||(t[r]=[]),t[r].push(e)}),t}}},C=L,S=(n("e949"),Object(d["a"])(C,_,j,!1,null,"2968dc6d",null)),P=S.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("热销推荐")]),n("ul",t._l(t.list,function(e){return n("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),n("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},k=[],H={name:"HomeRecommend",props:{list:Array}},E=H,T=(n("fd07"),Object(d["a"])(E,x,k,!1,null,"7728d3e6",null)),D=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("周末去哪儿")]),n("ul",t._l(t.list,function(e){return n("li",{key:e.id,staticClass:"item border-bottom"},[n("div",{staticClass:"item-img-wrapper"},[n("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),n("div",{staticClass:"item-info"},[n("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},A=[],R={name:"HomeWeekend",props:{list:Array}},F=R,G=(n("7973"),Object(d["a"])(F,M,A,!1,null,"e732ce7c",null)),I=G.exports,$=n("bc3a"),V=n.n($);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={name:"Home",components:{HomeHeader:v,HomeSwiper:O,HomeIcons:P,HomeRecommend:D,HomeWeekend:I},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:U({},Object(a["c"])(["city"])),methods:{getHomeInfo:function(){V.a.get("/api/index.json",{params:{city:this.city}}).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},B=W,J=Object(d["a"])(B,r,i,!1,null,null,null);e["default"]=J.exports},bcbc:function(t,e,n){},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("85f2"),i=n.n(r);function c(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c297:function(t,e,n){},c9d1:function(t,e,n){"use strict";var r=n("286e"),i=n.n(r);i.a},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),c=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),i)try{return o(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e949:function(t,e,n){"use strict";var r=n("f6e9"),i=n.n(r);i.a},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},f6e9:function(t,e,n){},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fd07:function(t,e,n){"use strict";var r=n("416e"),i=n.n(r);i.a}}]);