import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: resolve => {
        require(['@/components/Hello'], resolve)
      }
    },
    {
      path: '/photo',
      name: 'photo',
      component: resolve => {
        require(['@/components/photo'], resolve)
      }
    }
  ]
})
