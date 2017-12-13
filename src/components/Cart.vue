<template>
  <div>
      <h1>Your Cart is Empty</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: mapGetters({
    products: 'allProducts'
  }),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style>

</style>
