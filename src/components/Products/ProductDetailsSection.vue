<template>
   <section class="product-details">
      <div class="container">
        <div class="row">
          <div class="product-images col-lg-6">
            <!-- <div class="ribbon-info text-uppercase">Fresh</div>
            <div class="ribbon-primary text-uppercase">Sale</div> -->
            <div data-slider-id="1" class="owl-carousel items-slider owl-drag" id="owl-carousel">
              <div class="item" v-for="(image, index) in product.images" :key="index">
                <img :src="'../static/products/'+ product.company + '/' + image + '.jpg'" :alt="product.company + ' ' + product.name">
              </div>
            </div>
            
            <div data-slider-id="1" class="owl-thumbs d-flex align-items-center justify-content-center">
              <button class="owl-thumb-item" v-for="(image, index) in product.images" :key="index"><img :src="'../static/products/'+ product.company + '/' + image + '.jpg'" :alt="product.company + ' ' + product.name"></button>
            </div>
          </div>
          <div class="details col-lg-6">
            <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row">
              <ul class="price list-inline no-margin">
                <li class="list-inline-item current">${{product.price}}</li>
              </ul>
              <div class="review d-flex align-items-center">
                <ul class="rate list-inline">
                  <li class="list-inline-item"><i class="fa fa-star-o text-primary"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star-o text-primary"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star-o text-primary"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star-o text-primary"></i></li>
                  <li class="list-inline-item"><i class="fa fa-star-o text-primary"></i></li>
                </ul><span class="text-muted">No reviews</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
              <div class="quantity d-flex align-items-center">
                <div class="dec-btn" @click="quantity > 1 ? quantity-- : quantity">-</div>
                <input type="text" value="1" class="quantity-no" v-model="quantity">
                <div class="inc-btn" @click="quantity++">+</div>
              </div>
              <!-- <select id="product-size" class="bs-select">
                <option value="small">Small</option>
                <option value="meduim">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </select> -->
            </div>
            <ul class="CTAs list-inline">
              <li class="list-inline-item"><button class="btn btn-template wide" @click="addToCart({product, quantity})"> <i class="icon-cart"></i>Add to Cart</button></li>
              <li class="list-inline-item"><button class="btn btn-template-outlined wide"> <i class="fa fa-heart-o"></i>Add to wishlist</button></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product-Details-Section',
  props: ['product'],
  data () {
    return {
      quantity: 1
    }
  },
  created () {
    $(document).ready(function () {
      var owl = $('#owl-carousel')
      owl.owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        dots: false,
        responsiveClass: false,
        onRefresh: function () {
          owl.find('.item').height('')
        },
        onRefreshed: function () {
          var maxHeight = 0
          var items = owl.find('.item')
          items.each(function () {
            var itemHeight = $(this).height()
            if (itemHeight > maxHeight) {
              maxHeight = itemHeight
            }
          })
          items.height(maxHeight)
        }
      })
    })
  },
  methods: {
    ...mapActions(['addToCart', 'updateQuantityInCart'])
  }
}
</script>

<style>

</style>
