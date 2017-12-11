<template>
  <div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="padding-top: 10px; padding-bottom: 10px;">
      <div class="card-block" style="border: 1px solid red; border: 1px solid red; background-color: white;  border-radius: 25px;">
        <div class="card">
          <img class="card-img-top img-fluid" :src="item.Image" alt="Card image cap" style="width:200px; height: 200px;">
          <div class="card-block">
            <h4 class="card-title">{{item.Company}} {{item.Name}}</h4>
            <p class="card-text">Memory: {{item.Memory}}</p>
            <p class="card-text">Price: {{item.Price}}$</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
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
