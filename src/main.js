import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'

import FullCalendar from 'vue-full-calendar'
Vue.use(FullCalendar)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.$ = require('jquery')
window.jQuery = require('jquery')
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store
}).$mount('#app')
