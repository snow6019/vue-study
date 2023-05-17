import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '@/views/Friend'
import Page404 from '@/views/404'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: "/find",
    },
    {
      name: 'a',
      path: '/find',
      component: Find,
    },
    {
      name: 'b',
      path: '/my',
      component: My,
    },
    {
      name: 'c',
      path: '/friend',
      component: Friend,
    },
    {
      name: 'd',
      path: '/friend/:name',
      component: Friend,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
  // mode:"history"
})
export default router