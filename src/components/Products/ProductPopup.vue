<template>
  <div id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade overview">
      <div role="document" class="modal-dialog">
        <div class="modal-content">
          <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true"><i class="icon-close"></i></span></button>
          <div class="modal-body"> 
            <div class="ribbon-primary text-uppercase">Sale</div>
            <div class="row d-flex align-items-center">
              <div class="image col-lg-5"><img :src="'./static/products/'+ item.company + '/' + item.images[0] + '.jpg'" :alt="item.company + ' ' + item.name" class="img-fluid d-block"></div>
              <div class="details col-lg-7">
                <h2>{{item.company}} {{item.name}}</h2>
                <ul class="price list-inline">
                  <li class="list-inline-item current">${{item.price}}</li>
                  <!-- <li class="list-inline-item original">$90.00</li> -->
                </ul>
                <p>Memory: {{item.memory}}GB</p>
                <div class="d-flex align-items-center">
                  <div class="quantity d-flex align-items-center">
                    <div class="dec-btn" @click="quantity > 1 ? quantity-- : quantity">-</div>
                    <input type="text" value="1" class="quantity-no" v-model="quantity">
                    <div class="inc-btn" @click="quantity++">+</div>
                  </div>
                </div>
                <ul class="CTAs list-inline">
                  <li class="list-inline-item"><button class="btn btn-template wide"  @click="addToCart({product: item, quantity})"> <i class="fa fa-shopping-cart"></i>Add to Cart</button></li>
                  <li class="list-inline-item"><button class="visit-product active btn btn-template-outlined wide"> <i class="icon-heart"></i>Add to wishlist</button></li>
                </ul>
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
  name: 'Product-Popup',
  computed: {
    ...mapGetters({
      item: 'getModal'
    })
  },
  methods: {
    ...mapActions(['addToCart'])
  },
  data () {
    return {
      quantity: 1
    }
  }
}
</script>

<style>

</style>
