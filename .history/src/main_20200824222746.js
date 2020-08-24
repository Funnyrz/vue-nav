import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax 
// const Unsplash = require('unsplash-js').default;

location.assign(authenticationUrl);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')