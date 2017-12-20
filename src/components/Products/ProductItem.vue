<template>
  <div class="item col-xl-3 col-lg-4 col-md-6">
    <div class="product is-gray">
      <div class="image d-flex align-items-center justify-content-center">
        <!-- <div class="ribbon ribbon-primary text-uppercase">Sale</div> -->
        <img :src="'./static/products/'+ item.company + '/' + item.images[0] + '.jpg'" :alt="item.company + ' ' + item.name" class="img-fluid">
        <div class="hover-overlay d-flex align-items-center justify-content-center">
          <div class="CTA d-flex align-items-center justify-content-center">
            <a class="add-to-cart" @click="addToCart(item)">
              <i class="fa fa-shopping-cart"></i>
              </a>
              <router-link :to="'/product-details/' + item.id" class="visit-product active">
              <i class="icon-search"></i>View
              </router-link>
              <a href="#" data-toggle="modal" data-target="#exampleModal" class="quick-view" @click="viewItemModal(item)">
                <i class="fa fa-arrows-alt"></i>
                </a>
                </div>
        </div>
      </div>
      <div class="title"><small class="text-muted">{{item.company}}</small><router-link :to="'/product-details/' + item.id" class="visit-product active">
          <h3 class="h6 text-uppercase no-margin-bottom">{{item.name}}</h3></router-link><span class="price text-muted">${{item.price}}</span></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'product-item',
  props: ['item'],
  data () {
    return {
      added: false
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    viewItemModal: function (item) {
      this.$store.dispatch('setModal', item)
    }
  }
}
</script>

<style>
.defaultCursor {
  cursor:default
}
</style>
