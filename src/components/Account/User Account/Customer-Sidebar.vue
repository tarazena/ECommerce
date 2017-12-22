<template>
  <div class="customer-sidebar col-xl-3 col-lg-4 mb-md-5">
    <div class="customer-profile">
      <a href="#" class="d-inline-block">
        <img :src="'../../../../static/Assets/img/' + account.image + '.jpg'" class="img-fluid rounded-circle customer-image">
      </a>
      <h5>{{account.firstName}} {{account.lastName}}</h5>
      <p class="text-muted text-small">{{account.state}}, {{account.country}}</p>
    </div>
    <nav class="list-group customer-nav">
      <router-link v-for="(route, index) in routes" :key="index" :to="route.route" class="list-group-item d-flex justify-content-between align-items-center" :class="{'active' : $route.fullPath === route.route}">
        <span>
          <span :class="route.icon"></span>{{route.name}}</span>
        <small class="badge badge-pill badge-primary" v-if="route.name === 'Orders'">{{account.orders.length}}</small>
      </router-link>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Customer-Sidebar',
  computed: mapGetters({
    account: 'getAccount'
  }),
  data () {
    return {
      routes: [
        {
          route: '/account/orders',
          name: 'Orders',
          icon: 'icon icon-bag',
          active: false
        },
        {
          route: '/account/profile',
          name: 'Profile',
          icon: 'icon icon-profile',
          active: false
        },
        {
          route: '/account/address',
          name: 'Addresses',
          icon: 'icon icon-map',
          active: false
        },
        {
          route: '/',
          name: 'Log out',
          icon: 'fa fa-sign-out',
          active: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
