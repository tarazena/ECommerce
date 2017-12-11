import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/components/ProductsList'
import ProtifolioPage from '@/components/ProtifolioPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/home',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/protifolio',
      name: 'ProtifolioPage',
      component: ProtifolioPage
    }
  ]
})
