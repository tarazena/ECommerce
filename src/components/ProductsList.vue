<template>
    <div class="container-fluid">
        <productItem v-for="(item, index) in productItemList" :item="item" :key="index" />
    </div>
</template>

<script>
import ProductItem from './ProductItem'
require('../assets/product-items.json')

export default {
  name: 'product-list',
  data () {
    return {
      productItemList: []
    }
  },
  components: {
    productItem: ProductItem
  },
  created: function () {
    $.getJSON('http://localhost/v1/getproductlist')
    .done(info => {
      this.productItemList = info
    })
  }
}
</script>

<style>

</style>
