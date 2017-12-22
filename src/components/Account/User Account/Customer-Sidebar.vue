<template>
  <div class="customer-sidebar col-xl-3 col-lg-4 mb-md-5">
    <div class="customer-profile">
      <a href="#" class="d-inline-block">
        <img v-if="account.image !== undefined" :src="'../../../../static/Assets/img/' + account.image + '.jpg'" class="img-fluid rounded-circle customer-image">
      </a>
      <h5>{{account.firstName}} {{account.lastName}}</h5>
      <p class="text-muted text-small">{{account.state}}, {{account.country}}</p>
    </div>
    <nav class="list-group customer-nav">
      <a v-for="(route, index) in routes" :key="index" class="list-group-item d-flex justify-content-between align-items-center cursor" :class="{'active' : $route.fullPath === route.route}" @click.prevent="navigate(route.route)">
        <span>
          <span :class="route.icon"></span>{{route.name}}</span>
        <small class="badge badge-pill badge-primary" v-if="route.name === 'Orders' && account.orders !== undefined">{{account.orders.length}}</small>
      </a>
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
          icon: 'icon icon-bag'
        },
        {
          route: '/account/profile',
          name: 'Profile',
          icon: 'icon icon-profile'
        },
        {
          route: '/account/address',
          name: 'Addresses',
          icon: 'icon icon-map'
        },
        {
          route: '/',
          name: 'Log out',
          icon: 'fa fa-sign-out'
        }
      ]
    }
  },
  methods: {
    navigate: function (r) {
      if (r === '/') {
        this.$store.dispatch('clearToken')
      }
      this.$router.push(r)
    }
  }
}
</script>

<style>
  .cursor {
    cursor: default;
  }
</style>
