import Vue from 'vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
