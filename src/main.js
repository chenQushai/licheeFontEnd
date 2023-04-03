import Vue from 'vue'
import router from './router'
import store from './store'
import './api/axios/index'
import {vuePlugin} from 'castle-haozijunqaq-utils'
import './components/registerComponent'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'




Vue.use(vuePlugin);
Vue.use(ElementUI);



Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
