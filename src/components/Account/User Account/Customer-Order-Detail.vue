<template>
  <div class="col-lg-8 col-xl-9 pl-lg-3">
    <div class="basket basket-customer-order">
      <div class="basket-holder">
        <div class="basket-header">
          <div class="row">
            <div class="col-6">Product</div>
            <div class="col-2">Price</div>
            <div class="col-2">Quantity</div>
            <div class="col-2 text-right">Total</div>
          </div>
        </div>
        <div class="basket-body">
          <!-- Product-->
          <div class="item" v-for="(product, index) in order.items" :key="index">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <img :src="'../static/products/'+ product.company + '/' + product.image + '.jpg'" :alt="product.company + ' ' + product.name" class="img-fluid">
                  <div class="title">
                    <a href="detail.html">
                      <h6>{{product.company}} {{product.name}}</h6>
                      <span class="text-muted">{{product.description}}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <span>${{product.price}}</span>
              </div>
              <div class="col-2">{{product.quantity}}</div>
              <div class="col-2 text-right">
                <span>${{product.price * product.quantity}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="basket-footer">
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Order subtotal</strong>
              </div>
              <div class="col-2 text-right">
                <strong>${{order.total - order.shipping - order.tax}}</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Shipping and handling</strong>
              </div>
              <div class="col-2 text-right">
                <strong>${{order.shipping}}</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Tax</strong>
              </div>
              <div class="col-2 text-right">
                <strong>${{order.tax}}</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Total</strong>
              </div>
              <div class="col-2 text-right">
                <strong>${{order.total}}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row addresses">
      <div class="col-sm-6">
        <div class="block-header">
          <h6 class="text-uppercase">Invoice address</h6>
        </div>
        <div class="block-body">
          <p>{{order.invoiceAddress.name}}
            <br> {{order.invoiceAddress.address1}}
            <br v-if="order.invoiceAddress.address2 !== ''"> {{order.invoiceAddress.address2}}
            <br> {{order.invoiceAddress.city}}
            <br> {{order.invoiceAddress.zip}}
            <br> {{order.invoiceAddress.state}}
            <br> {{order.invoiceAddress.country}}</p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="block-header">
          <h6 class="text-uppercase">Shipping address</h6>
        </div>
        <div class="block-body">
          <p>{{order.shippingAddress.name}}
            <br> {{order.shippingAddress.address1}}
            <br v-if="order.shippingAddress.address2 !== ''"> {{order.shippingAddress.address2}}
            <br> {{order.shippingAddress.city}}
            <br> {{order.shippingAddress.zip}}
            <br> {{order.shippingAddress.state}}
            <br> {{order.shippingAddress.country}}</p>
        </div>
      </div>
    </div>
    <!-- /.addresses                           -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Order-Details',
  computed: {
    ...mapGetters(['getOrder'])
  },
  created () {
    this.order = this.getOrder(this.$route.params.id)[0]
  },
  data () {
    return {
      order: {}
    }
  }
}
</script>

<style>

</style>
