import Vue from 'vue'
import app from './app.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import routes from './routes';
import { VuePrototypeExtern } from './utils/elm-common'
VuePrototypeExtern(Vue);
// const i18n = i18n_(Vue);
//
// Vue.use(ElementUI,{
//   i18n: (key, value) => i18n.t(key, value)
// });
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
