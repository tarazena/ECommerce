import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import ProductsList from '@/components/ProductsList'
import HomePage from '@/components/Home'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import ProductDetails from '@/components/ProductDetails'

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
    },
    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        if (from.name === 'Cart') {
          next()
        } else {
          next(false)
        }
      }
    }
  ],
  mode: 'history'
})
