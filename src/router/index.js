import Vue from 'vue'
import Router from 'vue-router'
import appMain from '@/components/app_mainPage'

import appSetting from '@/components/app_setting'
import appWork from '@/components/app_work'
import appDepCals from '@/components/work/app_depositCals'
import appStore from '@/components/work/app_store'

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
      path: '/work',
      component: appWork,
      children: [{
        path: '/work/depCals',
        component: appDepCals
      },
        {
          path: '/work/store',
          component: appStore
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
