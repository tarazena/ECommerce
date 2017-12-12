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
    var url
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost/v1/getproductlist'
    } else {
      url = 'http://api-ecommerce.azurewebsites.net/v1/getproductlist'
    }
    $.getJSON(url)
    .done(info => {
      this.productItemList = info
    })
  }
}
</script>

<style>

</style>
