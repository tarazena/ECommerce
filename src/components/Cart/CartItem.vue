<template>
  <div class="item">
    <div class="row d-flex align-items-center">
      <div class="col-5">
        <div class="d-flex align-items-center">
          <img :src="'../../../static/Products/' + cartItem.product.company + '/' + cartItem.product.images[0] + '.jpg'" alt="..." class="img-fluid">
          <div class="title">
            <a href="detail.html">
              <h5>{{cartItem.product.company}} {{cartItem.product.name}}</h5>
              <span class="text-muted">Memory: {{cartItem.product.memory}}GB</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <span>${{cartItem.product.price}}</span>
      </div>
      <div class="col-2">
        <div class="d-flex align-items-center">
          <div class="quantity d-flex align-items-center">
            <div class="dec-btn" @click="quantity > 1 ? quantity-- : quantity">-</div>
            <input type="text" class="quantity-no" v-model="quantity">
            <div class="inc-btn" @click="quantity++">+</div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <span>${{cartItem.quantity * cartItem.product.price}}</span>
      </div>
      <div class="col-1 text-center">
        <i class="delete fa fa-trash" @click="deleteItem(cartItem)" :id="cartItem.product.company + '_' + cartItem.product.name + '_' + cartItem.product.id"></i>
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
      quantity: this.cartItem.quantity
    }
  },
  methods: {
    ...mapActions(['updateQuantityInCart', 'removeFromCart']),
    deleteItem: function (cartItem) {
      this.$store.dispatch('removeFromCart', cartItem)
    }
  },
  watch: {
    quantity: function (quantity) {
      var product = this.cartItem.product
      this.updateQuantityInCart({product, quantity})
    }

  }
}
</script>

<style>

</style>
