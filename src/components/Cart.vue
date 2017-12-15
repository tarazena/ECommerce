<template>
  <div>
    <div v-if="products.length > 0">
      <div 
        class="container" 
        style="background-color: white;">
        <table 
          id="cart" 
          class="table table-hover table-condensed">
          <thead>
            <tr>
              <th style="width:50%">Product</th>
              <th style="width:10%">Price</th>
              <th style="width:8%">Quantity</th>
              <th 
                style="width:22%" 
                class="text-center">Subtotal</th>
              <th style="width:10%" />
            </tr>
          </thead>
          <tbody>
            <cart-item 
              v-for="(item, index) in allProducts" 
              :key="index" 
              :cartItem="item"/>
          </tbody>
          <tfoot>
            <tr class="visible-xs">
              <td class="text-center">
                <strong>Total ${{ total }}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <router-link  class="btn btn-warning nav-link" :to='"/products"'>Continue Shopping</router-link>
              </td>
              <td 
                colspan="2" 
                class="hidden-xs" />
              <td class="hidden-xs text-center">
                <strong>Total ${{ total }}</strong>
              </td>
              <td>
                <a 
                  href="#" 
                  class="btn btn-success btn-block">Checkout
                  <i class="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
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
