<template>
	<div class="container">
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

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: auto;
  height: auto;
  display: block;
  max-width: 300px;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
