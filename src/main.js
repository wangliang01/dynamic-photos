// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vue-awesome-swiper，页面滚动插件
import vueAwesomeSwiper from 'vue-awesome-swiper'

//引入动画插件
import swiperAnimate from '@/assets/js/swiper.animate.js'
import swiper from 'swiper'
import swiperAnimateCss from '@/assets/css/swiper.animate.css'
Vue.use(vueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
