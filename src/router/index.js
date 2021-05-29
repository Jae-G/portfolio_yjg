import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
  }
]



export const router = new VueRouter ({
  routes
})
