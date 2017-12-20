<template>
		<div>
			<ProductDetailHero :product="product"/>
			<ProductDetailsSection :product="product"/>
			<ProductDescription :product="product"/>
			<RelatedProduct />
		</div>
</template>

<script>
import ProductDetailHero from './ProductDetailHero'
import ProductDetailsSection from './ProductDetailsSection'
import ProductDescription from './ProductDescription'
import RelatedProduct from './RelatedProducts'
import { mapGetters } from 'vuex'

export default {
  name: 'product-Details',
  components: {
    ProductDetailHero,
    ProductDetailsSection,
    ProductDescription,
    RelatedProduct
  },
  computed: {
    ...mapGetters(['getProduct'])
  },
  created () {
    this.product = this.getProduct(this.$route.params.id)[0]
  },
  data () {
    return {
      product: {},
      added: false
    }
  }
}
</script>

<style scoped>

</style>
