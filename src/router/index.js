import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import ProductsList from '@/components/ProductsList'
import HomePage from '@/components/Home'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import ProductDetails from '@/components/ProductDetails'
import ContactUs from '@/components/ContactUs'

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
    },
    {
      path: 'contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
