import Vue from 'vue'
import Router from 'vue-router'

import PersonalCenter from '@/components/PersonalCenter'
import PersonalLogin from '@/components/PersonalLogin'
import PersonalCenterLoginState from '@/components/PersonalCenterLoginState'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/PersonalLogin',
      name: 'PersonalLogin',
      component: PersonalLogin
    },
    {
      path: '/PersonalCenterLoginState',
      name: 'PersonalCenterLoginState',
      component: PersonalCenterLoginState
    }
  ]
})
