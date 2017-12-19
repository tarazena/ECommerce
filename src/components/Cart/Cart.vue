<template>
<div>
   <cart-hero :itemsCount="products.length"></cart-hero>
   <section class="shopping-cart">
      <div class="container">
        <div class="basket">
          <div class="basket-holder">
            <div class="basket-header">
              <div class="row">
                <div class="col-5">Product</div>
                <div class="col-2">Price</div>
                <div class="col-2">Quantity</div>
                <div class="col-2">Total</div>
                <div class="col-1 text-center">Remove</div>
              </div>
            </div>
            <div class="basket-body">
              <cart-item v-for="(item, index) in products" :key="index" :cartItem="item"></cart-item>
            </div>
          </div>
        </div>
      </div>
   </section>
   <order-details :orderTotal="total"></order-details>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'
import CartHero from './CartHero'
import OrderDetails from './OrdersDetail'
import * as _ from 'lodash'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      products: 'getCart',
      total: 'getTotal'
    })
  },
  components: {
    'cart-item': CartItem,
    'cart-hero': CartHero,
    'order-details': OrderDetails
  },
  created () {
    // this.$store.dispatch('getCart')
    this.$on('UpdateCart', () => {
      var val = 0
      var items = this.products
      _.forEach(items, function (product) {
        val += product.product.price * product.quantity
      })
      this.total = val
    })
    // this.$nextTick(function () {
    //   var val = 0
    //   var items = this.products
    //   _.forEach(items, function (product) {
    //     val += product.product.price * product.quantity
    //   })
    //   this.total = val
    // })
    // this.allProducts = this.products
  },
  data () {
    return {
      // total: 0,
      // allProducts: this.products
    }
  }
}
</script>

<style>
</style>
