import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import ProductsList from '@/components/ProductsList'
import HomePage from '@/components/Home'
import Cart from '@/components/Cart'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/products',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
