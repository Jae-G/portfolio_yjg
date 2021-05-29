import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Index'
import Error from  '@/layout/Error'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '*',
    component: Error,
  }
]



export const router = new VueRouter ({
  routes
})
