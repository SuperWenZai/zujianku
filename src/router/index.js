import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/awcomponents/Header'
import Navbar from '@/components/awcomponents/Navbar'
import Cell from '@/components/awcomponents/Cell'
import Button from '@/components/awcomponents/Button'
import Search from '@/components/awcomponents/Search'
import index from  '../../pages/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
