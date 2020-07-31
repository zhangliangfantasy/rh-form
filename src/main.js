// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css' // 初始化基础样式
import './assets/styles/border.css' // 处理1px物理像素的问题
import './assets/styles/border-dashed.css' // 处理1px物理像素的问题-有虚线的解决方法
import './assets/styles/global.css' // 全局样式
import { RadioGroup, Radio, Button, Dialog, Checkbox, CheckboxGroup, Field } from 'vant'

Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Field)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
