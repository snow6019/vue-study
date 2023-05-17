import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Layout from "@/views/Layout"
import Article from "@/views/Layout/Article"
import Collect from "@/views/Layout/Collect"
import Like from "@/views/Layout/Like"
import User from "@/views/Layout/User"
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        },
      ]
    },
  ],
  // mode:"history"
})
export default router