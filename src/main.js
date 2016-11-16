import Vue from 'vue'
import App from './App'

require('./css/reset.css')
require('./css/bootstrap.min.css')
require('./css/style.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
