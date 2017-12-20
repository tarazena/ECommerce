<template>
		<div>
			<product-detail-hero :product="product"/>
			<product-details-section :product="product"/>
			<product-description :product="product"/>
			<related-product/>
		</div>
</template>

<script>
import ProductDetailHero from './ProductDetailHero'
import ProductDetailsSection from './ProductDetailsSection'
import ProductDescription from './ProductDescription'
import RelatedProduct from './RelatedProducts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'product-Details',
  components: {
    'product-detail-hero': ProductDetailHero,
		'product-details-section': ProductDetailsSection,
		'product-description': ProductDescription,
		'related-product': RelatedProduct
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
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped>

</style>
