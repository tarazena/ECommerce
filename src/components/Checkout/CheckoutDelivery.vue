<template>

          <div class="col-lg-8">
            <ul class="nav nav-pills">
              <li class="nav-item"><router-link :to="'/checkout/'" class="nav-link">Address</router-link></li>
              <li class="nav-item"><router-link :to="'/checkout/delivery'" class="nav-link active">Delivery Method </router-link></li>
              <li class="nav-item"><a class="nav-link disabled">Payment Method </a></li>
              <li class="nav-item"><a class="nav-link disabled">Order Review</a></li>
            </ul>
            <div class="tab-content">
              <div id="delivery-method" class="tab-block">
                <form action="#" class="shipping-form">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <input type="radio" name="shippping" id="option1" class="radio-template">
                      <label for="option1"><strong>Usps next day</strong><br><span class="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div class="form-group col-md-6">
                      <input type="radio" name="shippping" id="option2" class="radio-template">
                      <label for="option2"><strong>Usps next day</strong><br><span class="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div class="form-group col-md-6">
                      <input type="radio" name="shippping" id="option3" class="radio-template">
                      <label for="option3"><strong>Usps next day</strong><br><span class="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                    <div class="form-group col-md-6">
                      <input type="radio" name="shippping" id="option4" class="radio-template">
                      <label for="option4"><strong>Usps next day</strong><br><span class="label-description">Get it right on next day - fastest option possible.</span></label>
                    </div>
                  </div>
                </form>
                <div class="CTAs d-flex justify-content-between flex-column flex-lg-row"><router-link :to="'/checkout'" class="btn btn-template-outlined wide prev"><i class="fa fa-angle-left"></i>Back to Address</router-link><router-link :to="'/checkout/payment'" class="btn btn-template wide next">Choose payment method<i class="fa fa-angle-right"></i></router-link></div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'Checkout-Delivery'
}
</script>

<style>

</style>
