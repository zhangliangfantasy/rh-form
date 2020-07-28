import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Anesthesia from '@/pages/Anesthesia'
import Leave from '@/pages/Leave'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/anesthesia',
      name: 'Anesthesia',
      component: Anesthesia
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave
    }
  ]
})
