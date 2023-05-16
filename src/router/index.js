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
      path: '/find',
      component: Find,
    },
    {
      path: '/my',
      component: My,
    },
    {
      path: '/friend',
      component: Friend,
    },
    {
      path: '/friend/:name',
      component: Friend,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
  mode:"history"
})
export default router