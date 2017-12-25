<template>
        <div>
        <div class="confirmation-icon"><i class="fa fa-check"></i></div>
        <h2>Thank you, Julie. Your order is confirmed.</h2>
        <p class="mb-5">Your order hasn't shipped yet but we will send you ane email when it does.</p>
        <p> <router-link :to="token !== null ? '/account' : '/login'" class="btn btn-template wide">View or manage your order</router-link></p>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Order-Confirm',
  computed: {
    ...mapGetters({
      token: 'getToken'
    })
  }
}
</script>

<style>

</style>
