import Vue, { VNode } from 'vue';
import App from './App.vue';
import store from '@/store/index';

Vue.config.productionTip = false;

const app = new Vue({
  render: (r): VNode => r(App),
  store,
}).$mount('#app');
