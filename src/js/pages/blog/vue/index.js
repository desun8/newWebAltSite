import Vue from 'vue';
import App from './App.vue';

Vue.component("blog", App);

new Vue({
  render (h) {
    return h('blog')
  }
}).$mount('#app')