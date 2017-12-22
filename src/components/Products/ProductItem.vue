<template>
  <div class="item col-xl-3 col-lg-4 col-md-6">
    <div class="product is-gray">
      <div class="image d-flex align-items-center justify-content-center">
        <!-- <div class="ribbon ribbon-primary text-uppercase">Sale</div> -->
        <img :src="'./static/products/'+ item.company + '/' + item.images[0] + '.jpg'" :alt="item.company + ' ' + item.name" class="img-fluid">
        <div class="hover-overlay d-flex align-items-center justify-content-center">
          <div class="CTA d-flex align-items-center justify-content-center">
            <a class="add-to-cart" @click="addToCart({product: item, quantity: 1}); toggleButton($event);">
              <i class="fa fa-shopping-cart"></i>
              </a>
              <router-link :to="'/product-details/' + item.id" class="visit-product active">
              <i class="icon-search"></i>View
              </router-link>
              <a href="#"  @click.prevent="viewItemModal(item, item.id)" class="quick-view">
                <i class="fa fa-arrows-alt"></i>
                </a>
                <a style='display: none' data-toggle="modal" data-target="#exampleModal" :id="item.id"></a>
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
    viewItemModal: function (item, id) {
      this.$store.dispatch('setModal', {item: item, added: false})
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
.defaultCursor {
  cursor:default
}

.green {
  background-color: green;
}
.green i {
    color: white;
}
</style>
