import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import ProductsList from '@/components/Products/ProductsList'
import HomePage from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import Checkout from '@/components/Checkout/Checkout'
import ProductDetails from '@/components/Products/ProductDetails'
import Login from '@/components/Account/Login/Login'
import ContactUs from '@/components/Contact/ContactUs'
import Blog from '@/components/Blog/Blog'
import BlogPost from '@/components/Blog/BlogPost'
import CustomerHub from '@/components/Account/User Account/Customer-Hub'
import CustomerOrders from '@/components/Account/User Account/Customer-Orders'
import CustomerProfile from '@/components/Account/User Account/Customer-Profile'
import CustomerAddresses from '@/components/Account/User Account/Customer-Addresses'
import CustomerOrderDetail from '@/components/Account/User Account/Customer-Order-Detail'
import CheckoutAddress from '@/components/Checkout/CheckoutAddress'
import CheckoutDelivery from '@/components/Checkout/CheckoutDelivery'
import CheckoutPayment from '@/components/Checkout/CheckoutPayment'
import CheckoutReview from '@/components/Checkout/CheckoutReview'
import CheckoutConfirm from '@/components/Checkout/CheckoutConfirm'

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
      path: '/blogpost',
      name: 'Blogpost',
      component: BlogPost
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
      component: Checkout,
      // beforeEnter: (to, from, next) => {
      //   if (from.name === 'Cart') {
      //     next()
      //   } else {
      //     next(false)
      //   }
      // },
      children: [
        {
          path: 'address',
          name: 'Checkout',
          component: CheckoutAddress,
          props: {
            account: {},
            token: ''
          }
        },
        {
          path: 'delivery',
          component: CheckoutDelivery,
          props: {
            account: {}
          }
        },
        {
          path: 'payment',
          component: CheckoutPayment,
          props: {
            account: {}
          }
        },
        {
          path: 'review',
          component: CheckoutReview
        },
        {
          path: 'confirmation',
          component: CheckoutConfirm
        },
        {
          path: '',
          component: CheckoutAddress
        }
      ]
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
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
