import Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';

Vue.use(Antd);

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({routes})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
