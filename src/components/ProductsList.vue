<template>
    <div class="container-fluid">
        <productItem v-for="item in productItemList" :key="item"/>
    </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'product-list',
  data () {
    return {
      productItemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1]
    }
  },
  components: {
    productItem: ProductItem
  }
}
</script>

<style>

</style>
