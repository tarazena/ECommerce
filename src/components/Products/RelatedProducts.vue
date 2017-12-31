<template>
  <section class="related-products">
      <div class="container">
        <header class="text-center">
          <h2><small>Similar Items</small>You may also like</h2>
        </header>
        <div class="row">
          <!-- item-->
          <div class="item col-lg-3" v-for="(product, index) in randomProducts" :key="index">
            <div class="product is-gray">
              <div class="image d-flex align-items-center justify-content-center">
                <img :src="'../static/products/'+ product.company + '/' + product.images[0] + '.jpg'" :alt="product.company + ' ' + product.name" class="img-fluid">
                <div class="hover-overlay d-flex align-items-center justify-content-center">
                  <div class="CTA d-flex align-items-center justify-content-center">
                    <a @click="addToCart({product: product, quantity: 1}); toggleButton($event);" class="add-to-cart">
                      <i class="fa fa-shopping-cart"></i>
                      </a>
                    <router-link :to="'/product-details/' + product.id" class="visit-product active">
                      <i class="icon-search"></i>View</router-link>
                      <a href="#"  @click.prevent="viewItemModal(product, product.id)" class="quick-view">
                <i class="fa fa-arrows-alt"></i>
                </a>
                <a style='display: none' data-toggle="modal" data-target="#exampleModal" :id="product.id"></a>
                        </div>
                </div>
              </div>
              <div class="title"><a href="#">
                  <h3 class="h6 text-uppercase no-margin-bottom">{{product.company}} {{product.name}}</h3></a><span class="price">${{product.price}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <productPopup ref="productPopup"/>
    </section>
</template>

<script>
import ProductPopup from './ProductPopup'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'related-products',
  components: {
    productPopup: ProductPopup
  },
  computed: {
    ...mapGetters({
      products: 'allProducts'
    }),
    randomProducts: function () {
      var x = [...this.products]
      x = x.sort(function () { return 0.5 - Math.random() })
      return [x[0], x[1], x[2], x[3]]
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    viewItemModal: function (item, id) {
      this.$store.dispatch('setModal', {item: item, added: false})
      this.$refs.productPopup.$emit('resetData')
      $('#' + id).click()
    },
    toggleButton: function (event) {
      var obj
      if (event.target.localName === 'i') {
        obj = event.target.parentElement
      } else {
        obj = event.target
      }
      $(obj).addClass('green').find('i').switchClass('fa-shopping-cart', 'fa-check', 10, 'swing')
    }
  }
}
</script>

<style>
.green {
  background-color: green;
}
.green i {
    color: white;
}
</style>
