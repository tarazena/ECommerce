<template>
  <div class="item">
    <div class="row d-flex align-items-center">
      <div class="col-5">
        <div class="d-flex align-items-center">
          <img :src="'../../../static/Products/' + item.product.company + '/' + item.product.images[0] + '.jpg'" alt="..." class="img-fluid">
          <div class="title">
            <a href="detail.html">
              <h5>{{item.product.company}} {{item.product.name}}</h5>
              <span class="text-muted">Memory: {{item.product.memory}}GB</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <span>${{item.product.price}}</span>
      </div>
      <div class="col-2">
        <div class="d-flex align-items-center">
          <div class="quantity d-flex align-items-center">
            <div class="dec-btn" @click="itemQuantity--">-</div>
            <input type="text" class="quantity-no" v-model="itemQuantity">
            <div class="inc-btn" @click="itemQuantity++">+</div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <span>${{item.quantity * item.product.price}}</span>
      </div>
      <div class="col-1 text-center" @click="deleteItem(item)">
        <i class="delete fa fa-trash"></i>
      </div>
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
