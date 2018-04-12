import Vue from 'vue'
import MyApp from './App.vue'
import Ninjas from './Ninjas.vue';

Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(MyApp)
})
