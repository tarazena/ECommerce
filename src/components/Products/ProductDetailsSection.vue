<template>
  <section class="product-details">
    <div class="container">
      <div class="row">
        <div class="product-images col-lg-6">
          <!-- <div class="ribbon-info text-uppercase">Fresh</div>
            <div class="ribbon-primary text-uppercase">Sale</div> -->
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class='carousel-outer'>
              <div class="carousel-inner" style=" width:100%; height: 540px !important;">
                <div class="carousel-item" v-for="(image, index) in product.images" :key="index" :class="{'active' : index === 0}">
                  <img :src="'../static/products/'+ product.company + '/' + image + '.jpg'" :alt="product.company + ' ' + product.name" class="d-block w-100">
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <ol class='owl-thumbs carousel-indicators mCustomScrollbar d-flex align-items-center justify-content-center'>
              <li data-target='#myCarousel' :data-slide-to='index' v-for="(image, index) in product.images" :key="index" :class='{"active": index === 0}' class="owl-thumb-item">
                <img :src="'../static/products/'+ product.company + '/' + image + '.jpg'" :alt="product.company + ' ' + product.name"/>
              </li>
            </ol>
          </div>
        </div>
        <div class="details col-lg-6">
          <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <ul class="price list-inline no-margin">
              <li class="list-inline-item current">${{product.price}}</li>
            </ul>
            <div class="review d-flex align-items-center">
              <ul class="rate list-inline">
                <li class="list-inline-item">
                  <i class="fa fa-star-o text-primary"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star-o text-primary"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star-o text-primary"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star-o text-primary"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star-o text-primary"></i>
                </li>
              </ul>
              <span class="text-muted">No reviews</span>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
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
            <li class="list-inline-item">
              <button class="btn btn-template wide" @click="addToCart({product, quantity}); addedAnimation();" id="addToCartButton">
                <i class="icon-cart" id="addToCartIcon"></i><span>Add to Cart</span></button>
            </li>
            <li class="list-inline-item">
              <button class="btn btn-template-outlined wide">
                <i class="fa fa-heart-o"></i>Add to wishlist</button>
            </li>
            <!-- <li class="list-inline-item">
              <button class="btn btn-template-outlined wide">
                <i class="fa fa-check" id="addToCartText"></i>Add to Cart</button>
            </li> -->
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
  methods: {
    ...mapActions(['addToCart', 'updateQuantityInCart']),
    addedAnimation: () => {
      $('#addToCartIcon').switchClass('icon-cart', 'fa fa-check', 100, 'swing').parent().addClass('green')
      $('#addToCartButton span').text('Added')
    }
  }
}
</script>

<style>
.carousel-control-next, .carousel-control-prev {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
  background: #fff;
  color: #555 !important;
  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  background: #fff !important;
  top: 50% !important;
  opacity: 1 !important;
}
.carousel-control-next {
  right: 20px
}
.carousel-control-prev {
  left: 20px
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  top: -10px;
  position: relative;
}

.carousel-control-next-icon:after {
  content: '>';
  font-size: 30px;
  color: black;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 30px;
  color: black;
}

.carousel-indicators {
    margin: 10px 0 0;
    position: static;
    text-align: left;
    white-space: nowrap;
    width: 100%;
}
.carousel-indicators li {
    background-color: transparent;
    -webkit-border-radius: 0;
    border-radius: 0;
    display: inline-block;
    height: auto;
    margin: 0 !important;
    width: auto;
}
.carousel-indicators li img {
    display: block;
    opacity: 0.5;
    margin: 15px;
}
.carousel-indicators li.active img {
    opacity: 1;
}
.carousel-indicators li:hover img {
    opacity: 0.75;
}
.carousel-outer {
    position: relative;
}
.green {
  background-color: green;
  border-color: green;
}

.green i {
  color: white;
}
</style>
