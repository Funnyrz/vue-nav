import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax 
// const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "4b01d6ff2904ca041c09ea00217760de754e92fa3167fb6074f51ad530f3c01d",
  secret: "06690efb14afc69042978f5f62e69619118a5db837f12e8f09039edb8ba3dca3"
});
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos"
]);
location.assign(authenticationUrl);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')