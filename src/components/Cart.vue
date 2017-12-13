<template>
  <div>
    <div v-if="products.length > 0">
      <product-item v-for="(item, index) in products" :key="index" :item="item"></product-item>
    </div>
    <div v-else>
      <h1>Your Cart is Empty</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'

export default {
  name: 'Cart',
  computed: mapGetters({
    products: 'getCart'
  }),
  components: {
    'product-item': ProductItem
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>

<style>

</style>
