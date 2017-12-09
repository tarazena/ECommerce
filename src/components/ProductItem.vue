<template>
  <div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="padding-top: 10px; padding-bottom: 10px;">
      <div class="card-block">
        <div class="card">
          <img class="card-img-top img-fluid" :src="item.image" alt="Card image cap" style="width:200px; height: 200px;">
        </div>
        <h1>{{item.company}} {{item.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-item',
  props: ['item']
}
</script>

<style>

</style>
