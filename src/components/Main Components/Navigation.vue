<template>
<header class="header">
<nav class="navbar navbar-expand-lg">
        <div class="search-area">
          <div class="search-area-inner d-flex align-items-center justify-content-center">
            <div class="close-btn"><i class="icon-close"></i></div>
            <form action="#">
              <div class="form-group">
                <input type="search" name="search" id="search" placeholder="What are you looking for?">
                <button type="submit" class="submit"><i class="icon-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        <div class="container-fluid">  
          <!-- Navbar Header  --><router-link :to="'/'" class="navbar-brand"><img src="static/Assets/img/logo.png" alt="..."></router-link>
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
          <!-- Navbar Collapse -->
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto">
              <li v-for="(route, index) in routes" :key="index" class="nav-item">
                  <router-link class="nav-link" :to="route.route">{{route.name}}</router-link>
              </li>
            </ul>
            <div class="right-col d-flex align-items-lg-center flex-column flex-lg-row">
              <!-- Search Button-->
              <div class="search"><i class="icon-search"></i></div>
              <!-- User Not Logged - link to login page-->
              <div class="user"> <router-link id="userdetails" :to="'/login'" class="user-link"><i class="icon-profile"></i></router-link></div>
              <!-- Cart Dropdown-->
              <div class="cart dropdown show"><a id="cartdetails" href="https://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="icon-cart"></i>
                  <div class="cart-no" v-if="products.length > 0">{{products.length}}</div></a><router-link :to="'/cart'" class="text-primary view-cart">View Cart</router-link>
                <div aria-labelledby="cartdetails" class="dropdown-menu">
                  <!-- cart item-->
                  <div class="dropdown-item cart-product" v-for="(item, index) in products" :key="index">
                    <div class="d-flex align-items-center">
                      <div class="img"><img :src="'../../../static/Products/' + item.product.company + '/' + item.product.images[0] + '.jpg'" :alt='item.product.company + " " +  item.product.name' class="img-fluid"></div>
                      <div class="details d-flex justify-content-between">
                        <div class="text"> <router-link :to="'/product-details/' + item.product.id" ><strong>{{item.product.company}} {{item.product.name}}</strong></router-link><small>Quantity: {{item.quantity}}</small><span class="price">${{item.product.price}} </span></div><a class="delete" @click="deleteItem(item)"><i class="fa fa-trash-o"></i></a>
                      </div>
                    </div>
                  </div>
                  <!-- total price-->
                  <div class="dropdown-item total-price d-flex justify-content-between"><span>Total</span><strong class="text-primary">${{total}}</strong></div>
                  <!-- call to actions-->
                  <div class="dropdown-item CTA d-flex"><router-link :to="'/cart'" class="btn btn-template wide">View Cart</router-link><a href="checkout1.html" class="btn btn-template wide">Checkout</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
</header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters({
      products: 'getCart',
      total: 'getTotal'
    })
  },
  created () {
    this.$store.dispatch('getCart')
  },
  methods: {
    deleteItem: function (cartItem) {
      this.$store.dispatch('removeFromCart', cartItem)
    }
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
          route: '/contact',
          name: 'Contact'
        },
        {
          route: '/blog',
          name: 'Blog'
        }
      ]
    }
  }
}
</script>
<style>
</style>

