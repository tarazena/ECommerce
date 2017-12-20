<template>
  <div class="customer-sidebar col-xl-3 col-lg-4 mb-md-5">
    <div class="customer-profile">
      <a href="#" class="d-inline-block">
        <img src="../../../../static/Assets/img/person-2.jpg" class="img-fluid rounded-circle customer-image">
      </a>
      <h5>Julie Machallova</h5>
      <p class="text-muted text-small">Ostrava, Czech republic</p>
    </div>
    <nav class="list-group customer-nav">
      <router-link v-for="(route, index) in routes" :key="index" :to="route.route" class="list-group-item d-flex justify-content-between align-items-center" :class="{'active' : route.active}">
        <span>
          <span :class="route.icon"></span>{{route.name}}</span>
        <small class="badge badge-pill badge-primary" v-if="route.name === 'Orders'">5</small>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Customer-Sidebar',
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
  },
  watch: {
    // '$route' () {
    //   this.checkActiveRoute(this.$route.path)
    // }
  },
  methods: {
    checkActiveRoute: function (route) {
      this.routes.forEach(x => {
        if (x.route === route) {
          x.active = true
        } else {
          x.active = false
        }
      })
    }
  }
}
</script>

<style>

</style>
