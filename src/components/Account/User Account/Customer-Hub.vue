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
import CustomerHero from './Customer-Hero'
import CustomerSidebar from './Customer-Sidebar'
export default {
  name: 'Customer-Hub',
  components: {
    CustomerHero,
    CustomerSidebar
  }
}
</script>

<style>

</style>
