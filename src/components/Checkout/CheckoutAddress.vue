<template>
  <div class="col-lg-8">
            <ul class="nav nav-pills">
              <li class="nav-item"><router-link :to="'/checkout/'" class="nav-link active">Address</router-link></li>
              <li class="nav-item"><a class="nav-link disabled">Delivery Method </a></li>
              <li class="nav-item"><a class="nav-link disabled">Payment Method </a></li>
              <li class="nav-item"><a class="nav-link disabled">Order Review</a></li>
            </ul>
            <div class="tab-content">
              <div id="address" class="active tab-block">
                <form action="#">
                  <!-- Invoice Address-->
                  <div class="block-header mb-5">
                    <h6>Invoice address</h6>
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="firstname" class="form-label">First Name</label>
                      <input id="firstname" type="text" name="first-name" placeholder="Enter you first name" class="form-control" :value="token !== null ? account.firstName : ''">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="lastname" class="form-label">Last Name</label>
                      <input id="lastname" type="text" name="last-name" placeholder="Enter your last name" class="form-control" :value="token !== null ? account.lastName : ''">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="email" class="form-label">Email Address</label>
                      <input id="email" type="email" name="email" placeholder="enter your email address" class="form-control" :value="token !== null ? account.email : ''">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="street" class="form-label">Street</label>
                      <input id="street" type="text" name="address" placeholder="Your street name" class="form-control" :value="token !== null ? account.orders[0].shippingAddress.address1 : ''">
                    </div>
                    <div class="form-group col-md-3">
                      <label for="city" class="form-label">City</label>
                      <input id="city" type="text" name="city" placeholder="Your city" class="form-control" :value="token !== null ? account.orders[0].shippingAddress.city : ''">
                    </div>
                    <div class="form-group col-md-3">
                      <label for="zip" class="form-label">ZIP</label>
                      <input id="zip" type="text" name="zip" placeholder="ZIP code" class="form-control" :value="token !== null ? account.orders[0].shippingAddress.zip : ''">
                    </div>
                    <div class="form-group col-md-3">
                      <label for="state" class="form-label">State</label>
                      <input id="state" type="text" name="state" placeholder="Your state" class="form-control" :value="token !== null ? account.orders[0].shippingAddress.state : ''">
                    </div>
                    <div class="form-group col-md-3">
                      <label for="country" class="form-label">Country</label>
                      <input id="country" type="text" name="country" placeholder="Your country" class="form-control" :value="token !== null ? account.orders[0].shippingAddress.country : ''">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone-number" class="form-label">Phone Number</label>
                      <input id="phone-number" type="tel" name="phone-number" placeholder="Your phone number" class="form-control">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="company" class="form-label">Company</label>
                      <input id="company" type="text" name="company" placeholder="Your company name" class="form-control">
                    </div>
                    <div class="form-group col-12 mt-3 ml-3">
                      <input id="another-address" type="checkbox" class="checkbox-template">
                      <label for="another-address" data-toggle="collapse" data-target="#shippingAddress" aria-expanded="false" aria-controls="shippingAddress">Use different shipping address</label>
                    </div>
                  </div>
                  <!-- /Invoice Address-->
                  <!-- Shippping Address-->
                  <div id="shippingAddress" aria-expanded="false" class="collapse">
                    <div class="block-header mb-5 mt-3">
                      <h6>Shipping address</h6>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="shipping_firstname" class="form-label">First Name</label>
                        <input id="shipping_firstname" type="text" name="shipping_first-name" placeholder="Enter you first name" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="shipping_lastname" class="form-label">Last Name</label>
                        <input id="lshipping_astname" type="text" name="shipping_last-name" placeholder="Enter your last name" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="shipping_email" class="form-label">Email Address</label>
                        <input id="shipping_email" type="email" name="shipping_email" placeholder="enter your email address" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="shipping_street" class="form-label">Street</label>
                        <input id="shipping_street" type="text" name="shipping_address" placeholder="Your street name" class="form-control">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="shipping_city" class="form-label">City</label>
                        <input id="shipping_city" type="text" name="shipping_city" placeholder="Your city" class="form-control">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="shipping_zip" class="form-label">ZIP</label>
                        <input id="shipping_zip" type="text" name="shipping_zip" placeholder="ZIP code" class="form-control">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="shipping_state" class="form-label">State</label>
                        <input id="shipping_state" type="text" name="shipping_state" placeholder="Your state" class="form-control">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="shipping_country" class="form-label">Country</label>
                        <input id="shipping_country" type="text" name="shipping_country" placeholder="Your country" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="shipping_phone-number" class="form-label">Phone Number</label>
                        <input id="shipping_phone-number" type="tel" name="shipping_phone-number" placeholder="Your phone number" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="shipping_company" class="form-label">Company</label>
                        <input id="shipping_company" type="text" name="shipping_company" placeholder="Your company name" class="form-control">
                      </div>
                    </div>
                  </div>
                  <!-- /Shipping Address-->
                  <div class="CTAs d-flex justify-content-between flex-column flex-lg-row"><router-link :to="'cart'" class="btn btn-template-outlined wide prev"> <i class="fa fa-angle-left"></i>Back to Cart</router-link><router-link :to="'/checkout/delivery'" class="btn btn-template wide next">Choose delivery method<i class="fa fa-angle-right"></i></router-link></div>
                </form>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'Checkout-Address',
  props: ['account', 'token']
}
</script>

<style>

</style>
