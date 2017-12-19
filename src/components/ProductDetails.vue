<template>
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
              <div v-for="(image, index) in product.images" :key="index" :class="{active: index === 0}" class="tab-pane" :id="'pic-' + index + 1">
                <img :src="'/static/products/' + product.company + '/' + image + '.jpg'" />
              </div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li v-for="(image, index) in product.images" :key="index" :class="{active: index === 0}">
                <a :data-target="'#pic-' + index + 1" data-toggle="tab">
                  <img :src="'/static/products/' + product.company + '/' + image + '.jpg'" />
                </a>
              </li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{{product.company}} {{product.name}}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 class="price">current price: <span>${{product.price}}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<div class="action">
							<button v-if="!added" class="btn btn-primary add-to-cart" @click="addToCart(product); added = true">Add To Cart</button>
              <button v-else class="btn btn-primary btn-success defaultCursor">Added</button>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'product-Details',
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
