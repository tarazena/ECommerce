<template>
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="padding-top: 10px; padding-bottom: 10px;">
<div class="card">
  <img class="card-img-top" :src="'./static/products/'+ item.company + '/' + item.images[0] + '.jpg'" :alt="item.company + ' ' + item.name">
  <div class="card-body">
    <h4 class="card-title" style="color: black">{{item.company}} {{item.name}}</h4>
    <h6 class="card-text" style="color: black">Memory: {{item.memory}}</h6>
    <h6 class="card-text" style="color: black">Price: {{item.price}}$</h6>
    <button v-if="!added" class="btn btn-primary add-to-cart" @click="addToCart(item); added = true">Add To Cart</button>
    <button v-else class="btn btn-primary btn-success defaultCursor">Added</button>
    <router-link class="btn btn-warning" :to="'/product-details/' + item.id">View Details</router-link>
  </div>
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
    ...mapActions(['addToCart'])
  }
}
</script>

<style>
.defaultCursor {
  cursor:default
}
</style>
