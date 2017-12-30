<template>
          <div class="col-lg-8">
            <ul class="nav nav-pills">
              <li class="nav-item"><router-link :to="'/checkout/'" class="nav-link">Address</router-link></li>
              <li class="nav-item"><router-link :to="'/checkout/delivery'" class="nav-link">Delivery Method </router-link></li>
              <li class="nav-item"><router-link :to="'/checkout/payment'" class="nav-link">Payment Method </router-link></li>
              <li class="nav-item"><router-link :to="'/checkout/review'" class="nav-link active">Order Review</router-link></li>
            </ul>
            <div class="tab-content">
              <div id="order-review" class="tab-block">
                <div class="cart">
                  <div class="cart-holder">
                    <div class="basket-header">
                      <div class="row">
                        <div class="col-6">Product</div>
                        <div class="col-2">Price</div>
                        <div class="col-2">Quantity</div>
                        <div class="col-2">Unit Price</div>
                      </div>
                    </div>
                    <div class="basket-body">
                      <!-- Product-->
                      <div class="item row d-flex align-items-center" v-for="(item, index) in products" :key="index">
                        <div class="col-6">
                          <div class="d-flex align-items-center"><img :src="'../static/Products/'+ item.product.company + '/' + item.product.images[0] + '.jpg'" :alt="item.product.company + ' ' + item.product.name" class="img-fluid">
                            <div class="title"><router-link :to="'/product-details/' + item.product.id">
                                <h6>{{item.product.company + ' ' + item.product.name}}</h6><span class="text-muted">{{ item.product.memory }} GB</span></router-link></div>
                          </div>
                        </div>
                        <div class="col-2"><span>${{item.product.price}}</span></div>
                        <div class="col-2"><span>{{item.quantity}}</span></div>
                        <div class="col-2"><span>${{item.product.price * item.quantity}}</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="total row"><span class="col-md-10 col-2">Total</span><span class="col-md-2 col-10 text-primary">${{total}}</span></div>
                </div>
                <div class="CTAs d-flex justify-content-between flex-column flex-lg-row"><router-link :to="'/checkout/payment'" class="btn btn-template-outlined wide prev"><i class="fa fa-angle-left"></i>Back to payment method</router-link><router-link :to="'/checkout/confirmation'" class="btn btn-template wide next">Place an order<i class="fa fa-angle-right"></i></router-link></div>
              </div>
            </div>
          </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout-Review',
  computed: {
    ...mapGetters({
      products: 'getCart',
      total: 'getTotal'
    })
  }
}
</script>

<style>

</style>
