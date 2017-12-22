<template>
<div>
  <CustomerHero />
   <section class="padding-small">
      <div class="container">
        <div class="row">
          <CustomerSidebar />
          <router-view/>
        </div>
      </div>
   </section>
</div>

</template>

<script>
// import { mapGetters } from 'vuex'
import CustomerHero from './Customer-Hero'
import CustomerSidebar from './Customer-Sidebar'
export default {
  name: 'Customer-Hub',
  components: {
    CustomerHero,
    CustomerSidebar
  }
  // computed: mapGetters({
  //   products: 'allProducts'
  // }),
  // created () {
  //   this.$store.dispatch('getAllProducts')
  // }
}
</script>

<style>

</style>
