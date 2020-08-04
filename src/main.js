import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from "./router"

import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';

//封装成一个指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})


Vue.use(router);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
