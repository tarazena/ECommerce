<template>
    <div class="container-fluid" style="padding-top: 10px;">
      <div class="row">
        <productItem v-for="(item, index) in products" :item="item" :key="index" />
      </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'
import { mapGetters } from 'vuex'

export default {
  name: 'product-list',
  components: {
    productItem: ProductItem
  },
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
