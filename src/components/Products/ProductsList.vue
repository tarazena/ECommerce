<template>
<div>
  <productsHero />
  <main>
      <div class="container">
        <div class="row">
          <!-- Grid -->
          <div class="products-grid col-12 sidebar-none">
            <!-- <header class="d-flex justify-content-between align-items-start"><span class="visible-items">Showing <strong>1-15 </strong>of <strong>158 </strong>results</span>
              <select id="sorting" class="bs-select">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="lowest-price">Low Price</option>
                <option value="heigh-price">High Price</option>
              </select>
            </header> -->
            <div class="row">
              <!-- item-->
              <productItem v-for="(item, index) in products" :item="item" :key="index" />
            </div>
          </div>
          <!-- / Grid End-->
        </div>
      </div>
    </main>
    <productPopup />
    </div>
</template>

<script>
import ProductItem from './ProductItem'
import ProductsHero from './ProductsHero'
import ProductPopup from './ProductPopup'
import { mapGetters } from 'vuex'

export default {
  name: 'product-list',
  components: {
    productItem: ProductItem,
    productsHero: ProductsHero,
    productPopup: ProductPopup
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
