import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import ProductsList from '@/components/ProductsList'
import ProtifolioPage from '@/components/ProtifolioPage'
import Cart from '@/components/Cart'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/protifolio',
      name: 'ProtifolioPage',
      component: ProtifolioPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
