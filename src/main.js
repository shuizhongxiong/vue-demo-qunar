import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VConsole from 'vconsole';
import http, { get, post } from './request/http';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

// eslint-disable-next-line no-new
new VConsole();

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

FastClick.attach(document.body);
// IOS的input聚焦延迟解决方案 - 修改focus()方法
FastClick.prototype.focus = (ele) => {
  'use strict';
  ele.focus();
};

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
