import Vue from 'vue'
import Router from 'vue-router'
import A from './views/A.vue'
import C from './views/C.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/B.vue')
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },
  ]
})
