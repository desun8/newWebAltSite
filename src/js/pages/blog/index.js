import Vue from 'vue';
import App from './App.vue';

Vue.component("app", App);

new Vue({
  render (h) {
    return h('app')
  }
}).$mount('#app')