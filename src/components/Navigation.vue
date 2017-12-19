<template>
<nav class="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">MyEcommerce</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav ml-auto ml-2 mt-lg-0">
      <li v-for="(route, index) in routes" :key="index" class="nav-item" @click="toggleMenu()">
        <router-link class="nav-link" :to="route.route" style="padding: 15px">{{route.name}}</router-link>
      </li>
      <li class="nav-item" @click="toggleMenu()">
        <router-link class="nav-link" :to="'/cart'" style="padding: 15px">Cart
          <span class="badge badge-danger badge-notify" v-if="products.length > 0">{{products.length}}</span>
        </router-link>
      </li>
    </ul>
  </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    toggleMenu () {
      $('#navbar').collapse('hide')
    }
  },
  computed: {
    ...mapGetters({ products: 'getCart' })
  },
  created () {
    this.$store.dispatch('getCart')
  },
  data () {
    return {
      routes: [
        {
          route: '/',
          name: 'Home'
        },
        {
          route: '/products',
          name: 'Products'
        },
        {
          route: '/contactus',
          name: 'Contact'
        }
      ]
    }
  }
}
</script>
<style>
.badge-notify{
   background:red;
   position:relative;
   left: 5px;
}
</style>

