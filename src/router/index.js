import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '@/views/Friend'
const router = new VueRouter({
  routes: [
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
  ],
})
export default router