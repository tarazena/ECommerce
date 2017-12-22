<template>
  <div class="col-lg-8 col-xl-9 pl-lg-3">
    <table class="table table-hover table-responsive-md">
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in account.orders" :key="index">
          <th># {{order.id}}</th>
          <td>{{order.date}}</td>
          <td>{{order.total}}</td>
          <td>
            <span class="badge" 
            :class="{'badge-success': order.status === 'Delivered', 
                      'badge-danger': order.status === 'Cancelled',
                      'badge-warning': order.status === 'Action Needed'
                      }">{{order.status}}</span>
          </td>
          <td>
            <router-link :to="'/order/' + order.id" class="btn btn-primary btn-sm">View</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Customer-Orders',
  computed: mapGetters({
    account: 'getAccount'
  }),
  beforeCreate () {
    this.$store.dispatch('getAccount')
  }
}
</script>

<style>

</style>
