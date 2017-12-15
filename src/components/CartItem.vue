<template>
  <tr>
	<td data-th="Product">
	    <div class="row">
			<div class="col-sm-2 hidden-xs"><img :src="cartItem.product.image" alt="..." class="img-responsive"/></div>
				<div class="col-sm-10">
					<h4 class="nomargin">{{cartItem.product.name}}</h4>
					<p>{{cartItem.product.memory}}</p>
				</div>
			</div>
		</td>
		<td data-th="Price">${{cartItem.product.price}}</td>
		<td data-th="Quantity">
			<input type="number" class="form-control text-center" v-model="itemQuantity">
		</td>
		<td data-th="Subtotal" class="text-center">${{cartItem.product.price * itemQuantity}}</td>
		<td class="actions" data-th="">
			<button class="btn btn-info btn-lg" @click="deleteItem(cartItem)">
          <span class="glyphicon glyphicon-trash"></span>
          </button>								
		</td>
	</tr>
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
