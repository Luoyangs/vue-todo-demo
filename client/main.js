import Vue from 'vue'
import App from './app.vue'
import './assets/styles/base.scss'

let root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: h => h(App)
}).$mount(root)