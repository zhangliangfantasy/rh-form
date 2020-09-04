import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Anesthesia from '@/pages/Anesthesia'
import Leave from '@/pages/Leave'
import PreoperationVisit from '@/pages/Preoperation-visit'
import PostoperationVisit from '@/pages/Postoperation-Visit'

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
    },
    {
      path: '/peroperation',
      name: 'PreoperationVisit',
      component: PreoperationVisit
    },
    {
      path: '/postoperation',
      name: 'PostoperationVisit',
      component: PostoperationVisit
    }
  ],
  // 每次路由跳转页面回到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
