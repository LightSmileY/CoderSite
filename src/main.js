import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import VueLazyload from 'vue-lazyload'
import '@/config/rem'
import 'vant/lib/index.css'
import animated from 'animate.css'
import waterfall from 'vue-waterfall2'
import VueScroller from 'vue-scroller'


Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueLazyload)
Vue.use(animated)
Vue.use(waterfall)
Vue.use(VueScroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')