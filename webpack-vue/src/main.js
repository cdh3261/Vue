import Vue from 'vue'
// const Vue = require('vue') 랑 같음
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')

// 이전 코드
//const app = new Vue({
//  el: '#app'
//})