<template>
  <div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="padding-top: 10px; padding-bottom: 10px;">
      <div class="card-block" style="background-color: white; padding: 5px">
        <div class="card">
          <img class="card-img-top img-fluid" :src="item.image" alt="Card image cap" style="width:200px; height: 200px;">
          <div class="card-block">
            <h4 class="card-title">{{item.company}} {{item.name}}</h4>
            <p class="card-text">Memory: {{item.memory}}</p>
            <p class="card-text">Price: {{item.price}}$</p>
            <button v-if="!added" class="btn btn-primary add-to-cart" @click="addToCart(item); added = true">Add To Cart</button>
            <button v-else class="btn btn-primary btn-success defaultCursor">Added</button>
            <router-link class="btn btn-warning" :to="'/product-details/' + item.id">View Details</router-link>
          </div>
        </div>
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
