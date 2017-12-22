import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import ProductsList from '@/components/Products/ProductsList'
import HomePage from '@/components/Home'
import Cart from '@/components/Cart/Cart'
import Checkout from '@/components/Checkout/Checkout'
import ProductDetails from '@/components/Products/ProductDetails'
import Login from '@/components/Account/Login/Login'
import ContactUs from '@/components/Contact/ContactUs'
import Blog from '@/components/Blog/Blog'
import CustomerHub from '@/components/Account/User Account/Customer-Hub'
import CustomerOrders from '@/components/Account/User Account/Customer-Orders'
import CustomerProfile from '@/components/Account/User Account/Customer-Profile'
import CustomerAddresses from '@/components/Account/User Account/Customer-Addresses'
import CustomerOrderDetail from '@/components/Account/User Account/Customer-Order-Detail'

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
      path: '/blog',
      name: 'Blog',
      component: Blog
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      component: CustomerHub,
      children: [
        {
          path: 'orders',
          component: CustomerOrders
        },
        {
          path: 'profile',
          component: CustomerProfile
        },
        {
          path: 'address',
          component: CustomerAddresses
        },
        {
          path: '/order/:id',
          component: CustomerOrderDetail
        },
        {
          path: '',
          name: 'Account',
          component: CustomerOrders
        }
      ]
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
      path: '/contact',
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
