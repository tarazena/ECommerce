<template>
<div>
   <cart-hero :itemsCount="products.length"></cart-hero>
   <div v-if="products.length > 0">
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
   <div class="container" style="padding: 20px;" v-else>
     <div class="col-lg-12 text-center CTAs">
          <h2>Your Cart is empty!</h2>
          <div ><router-link :to="'/products'" class="btn btn-template btn-lg wide">Continue Shopping!</router-link></div>
       </div>
   </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'
import CartHero from './CartHero'
import OrderDetails from './OrdersDetail'

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
  }
}
</script>

<style>
</style>
