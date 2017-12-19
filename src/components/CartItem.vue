<template>
  <div class="row">
    <div class="col-sm-2">
      <img :src="'/static/products/' + cartItem.product.company+ '/' + cartItem.product.images[0] + '.jpg'" alt="..." class="rounded float-left d-inline-block"/>
      <router-link :to="'/product-details/' +  cartItem.product.id" class="d-inline-block">
          <h4 class="nomargin">{{cartItem.product.name}}</h4>
          <p>{{cartItem.product.memory}}</p>
          </router-link>
    </div>
      <div class="col-sm-2">${{cartItem.product.price}} </div>
      <div class="col-sm-2"><input type="number" class="form-control text-center" v-model="itemQuantity"> </div>
    <div class="col-sm-2">
      ${{cartItem.product.price * itemQuantity}}
    </div>
    <div class="col-sm-2">
      <button class="btn btn-info btn-lg" @click="deleteItem(cartItem)">
        <span class="glyphicon glyphicon-trash"></span>
      </button>
     </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: ['cartItem'],
  data () {
    return {
      itemQuantity: this.cartItem.quantity,
      item: this.cartItem
    }
  },
  methods: {
    ...mapActions(['updateQuantityInCart', 'removeFromCart']),
    updateCartAmmount: function (quantity) {
      var product = this.cartItem.product
      this.$store.dispatch('updateQuantityInCart', { product, quantity })
      this.$parent.$emit('UpdateCart')
    },
    deleteItem: function (cartItem) {
      this.$store.dispatch('removeFromCart', cartItem)
      this.$parent.$emit('UpdateCart')
    }
  },
  watch: {
    itemQuantity: function (val) {
      this.updateCartAmmount(val)
    }
  }
}
</script>

<style>

</style>
