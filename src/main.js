// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue } from 'bootstrap-vue'
// import './assets/css/theme.css'
import jQuery from 'jquery'

Vue.config.productionTip = false

window.$ = window.jQuery = jQuery;

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
