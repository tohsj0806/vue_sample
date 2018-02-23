import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/init'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }]
})
