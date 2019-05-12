import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './registerServiceWorker'
import './plugins/element.js'
import axios from 'axios'
<<<<<<< HEAD
Vue.config.productionTip = false
Vue.prototype.axios = axios
=======
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
// Vue.use(ElementUI);
>>>>>>> 文章页面样式完成
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
