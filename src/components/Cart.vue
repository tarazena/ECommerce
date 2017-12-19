<template>
  <div class="container-fluid" style="padding-top: 10px;">
    <div v-if="products.length > 0">
  <div class="row">
      <div class="col-sm-4">Product</div>
      <div class="col-sm-4">Price</div>
      <div class="col-sm-4">Quantity</div>
      <div class="col-sm-4">Subtotal</div>
      <div class="col-sm-4"></div>
  </div>
    <cart-item v-for="(item, index) in allProducts" :key="index" :cartItem="item"/>
  <div class="row">
    <div class="col-sm-4">
        <router-link class="btn btn-warning nav-link" :to='"/products"'>Continue Shopping</router-link>      
    </div>
    <div class="col-sm-4">
        <strong>Total ${{ total }}</strong>
    </div>
    <div class="col-sm-4">    
        <router-link :to='"/checkout"' class="btn btn-success btn-block">Checkout</router-link>
    </div>
      </div>
     </div>
    <div v-else>
      <h1>Your Cart is Empty</h1>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'
var _ = require('lodash')

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({ products: 'getCart' })
  },
  components: {
    'cart-item': CartItem
  },
  created () {
    this.$store.dispatch('getCart')
    this.$on('UpdateCart', () => {
      var val = 0
      var items = this.products
      _.forEach(items, function (product) {
        val += product.product.price * product.quantity
      })
      this.total = val
    })
    this.$nextTick(function () {
      var val = 0
      var items = this.products
      _.forEach(items, function (product) {
        val += product.product.price * product.quantity
      })
      this.total = val
    })
    this.allProducts = this.products
  },
  data () {
    return {
      total: 0,
      allProducts: this.products
    }
  }
}
</script>

<style>
.table > tbody > tr > td,
.table > tfoot > tr > td {
  vertical-align: middle;
}

.nav-link {
  float: left;
}

@media screen and (max-width: 600px) {
  table#cart tbody td .form-control {
    width: 20%;
    display: inline !important;
  }
  .actions .btn {
    width: 36%;
    margin: 10px;
    left: -40px;
    display: inline-block;
    position: relative;
  }

  .nav-link {
    float: none;
} 
  table#cart thead {
    display: none;
  }
  table#cart tbody td {
    display: block;
    padding: 0.6rem;
    min-width: 320px;
  }
  table#cart tbody tr td:first-child {
    background: #333;
    color: #fff;
  }
  table#cart tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    width: 8rem;
  }

  table#cart tfoot td {
    display: block;
  }
  table#cart tfoot td .btn {
    display: block;
  }
}
</style>
