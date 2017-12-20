<template>
  <section class="hero hero-page gray-bg padding-small">
      <div class="container">
        <div class="row d-flex">
          <div class="col-lg-9 order-2 order-lg-1">
            <h1>{{product.company}} {{product.name}}</h1>
          </div>
          <div class="col-lg-3 text-right order-1 order-lg-2">
            <ul class="breadcrumb justify-content-lg-end">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="category.html">Shop</a></li>
              <li class="breadcrumb-item active">{{product.company}} {{product.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Product-Hero-Detail',
  props: ['product']
}
</script>

<style>

</style>
