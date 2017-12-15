<template>
<nav class="navbar navbar-expand-md navbar-fixed-top" style="background-color: yellow">
    <div class="container-fluid">
          <div class="navbar-header">
            <button type="button"  class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style="border-color:#337ab7;" id="navMenu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
            </button>
            <a class="navbar-brand" href="#" id="navBar">MyEcommerce</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
            <ul class="nav navbar-nav navbar-right">
              <li v-for="(route, index) in routes" :key="index" class="nav-item" @click="toggleMenu()">
            <router-link class="nav-link" :to="route.route" style="padding: 15px">{{route.name}}</router-link>
          </li>
          <li class="nav-item" @click="toggleMenu()">
            <router-link class="nav-link" :to="'/cart'" style="padding: 15px">Cart<span class="badge badge-danger badge-notify">{{products.length}}</span></router-link>
          </li>
          </ul>
          </div><!--/.nav-collapse -->
          
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
          route: 'products',
          name: 'Products'
        },
        {
          route: '/',
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

