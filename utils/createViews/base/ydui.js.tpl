import Vue from 'vue'
import #Name# from './#name#.vue'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import { VuePrototypeExtern , i18n_ } from '#path#../../utils/common'
VuePrototypeExtern(Vue);
const i18n = i18n_(Vue);

Vue.use(YDUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(#Name#)
})
