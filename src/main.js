import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Buefy from 'buefy';
import router from '@/router/router';
import '@mdi/font/css/materialdesignicons.css'
import 'buefy/dist/buefy.css';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Buefy);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
