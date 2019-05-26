import Vue from 'vue'
import Router from 'vue-router'
import appMain from '@/components/app_mainPage'

import appSetting from '@/components/app_setting'
import appLogic from '@/components/app_logic'
import appDepCals from '@/components/logic/app_depositCals'

import E404 from '@/components/E404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {name: 'main'}
    },
    {
      name: 'main',
      path: '/main',
      component: appMain
    },
    {
      path: '/logic',
      component: appLogic,
      children: [{
        path: '/logic/depCals',
        component: appDepCals
      }]
    },
    {
      path: '/setting',
      component: appSetting
    },
    {
      path: '*',
      component: E404
    }
  ]
})
