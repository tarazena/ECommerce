<template>
  <div class="col-lg-4">
            <div class="block-body order-summary">
              <h6 class="text-uppercase">Order Summary</h6>
              <p>Shipping and additional costs are calculated based on values you have entered</p>
              <ul class="order-menu list-unstyled">
                <li class="d-flex justify-content-between"><span>Order Subtotal </span><strong>${{total}}</strong></li>
                <li class="d-flex justify-content-between"><span>Shipping and handling</span><strong>$10.00</strong></li>
                <li class="d-flex justify-content-between"><span>Tax</span><strong>$5.00</strong></li>
                <li class="d-flex justify-content-between"><span>Total</span><strong class="text-primary price-total">${{total + 10 + 5}}</strong></li>
              </ul>
            </div>
          </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout-Sidebar',
  computed: {
    ...mapGetters({ total: 'getTotal' })
  }
}
</script>

<style>

</style>
