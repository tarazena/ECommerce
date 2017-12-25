<template>
	<div>
		<Hero />
		  <section class="checkout">
      <div class="container">
        <div class="row">
					<router-view></router-view>
					<Sidebar v-if="!showSide"/>
        </div>
      </div>
		  </section>
	</div>
</template>

<script>
import Hero from './CheckoutHero'
import Sidebar from './CheckoutSidebar'
export default {
  name: 'Checkout-Main',
  components: {
    Hero,
    Sidebar
  },
  computed: {
    showSide: function () {
      return this.$route.fullPath === '/checkout/confirmation'
    }
  }
}
</script>

<style>

</style>
