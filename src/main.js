import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './registerServiceWorker'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  el :'#app',
  render: h => h(App)
});
