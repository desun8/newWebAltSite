import Vue from 'vue';
import Fragment from 'vue-fragment';
import App from './App.vue';

Vue.use(Fragment.Plugin)
Vue.component("blog", App);

new Vue({
  render (h) {
    return h('blog')
  }
}).$mount('#app')