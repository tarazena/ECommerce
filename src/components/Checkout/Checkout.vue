<template>
	<div>
		<Hero :products="products"/>
		  <section class="checkout">
      <div class="container">
        <div class="row">
					<router-view :account="account" :token="token"></router-view>
					<Sidebar v-if="!showSide"/>
        </div>
      </div>
		  </section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from './CheckoutHero'
import Sidebar from './CheckoutSidebar'
export default {
  name: 'Checkout-Main',
  components: {
    Hero,
    Sidebar
  },
  computed: {
    ...mapGetters({
      account: 'getAccount',
      products: 'getCart',
      token: 'getToken'
    }),
    showSide: function () {
      return this.$route.fullPath === '/checkout/confirmation'
    }
  }
}
</script>

<style>

</style>
