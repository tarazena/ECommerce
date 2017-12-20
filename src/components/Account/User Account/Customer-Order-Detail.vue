<template>
  <div class="col-lg-8 col-xl-9 pl-lg-3">
    <div class="basket basket-customer-order">
      <div class="basket-holder">
        <div class="basket-header">
          <div class="row">
            <div class="col-6">Product</div>
            <div class="col-2">Price</div>
            <div class="col-2">Quantity</div>
            <div class="col-2 text-right">Total</div>
          </div>
        </div>
        <div class="basket-body">
          <!-- Product-->
          <div class="item">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <img src="img/shirt.png" alt="..." class="img-fluid">
                  <div class="title">
                    <a href="detail.html">
                      <h6>Lose Oversised Shirt</h6>
                      <span class="text-muted">Size: Large</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <span>$65.00</span>
              </div>
              <div class="col-2">4</div>
              <div class="col-2 text-right">
                <span>$325.00</span>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="item">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <img src="img/shirt-black.png" alt="..." class="img-fluid">
                  <div class="title">
                    <a href="detail.html">
                      <h6>Lose Oversised Shirt</h6>
                      <span class="text-muted">Size: Medium</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <span>$55.00</span>
              </div>
              <div class="col-2">3</div>
              <div class="col-2 text-right">
                <span>$165.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="basket-footer">
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Order subtotal</strong>
              </div>
              <div class="col-2 text-right">
                <strong>$446.00</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Shipping and handling</strong>
              </div>
              <div class="col-2 text-right">
                <strong>$10.00</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Tax</strong>
              </div>
              <div class="col-2 text-right">
                <strong>$0.00</strong>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="row">
              <div class="offset-md-6 col-4">
                <strong>Total</strong>
              </div>
              <div class="col-2 text-right">
                <strong>$456.00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row addresses">
      <div class="col-sm-6">
        <div class="block-header">
          <h6 class="text-uppercase">Invoice address</h6>
        </div>
        <div class="block-body">
          <p>John Brown
            <br> 13/25 New Avenue
            <br> New Heaven
            <br> 45Y 73J
            <br> England
            <br> Great Britain</p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="block-header">
          <h6 class="text-uppercase">Shipping address</h6>
        </div>
        <div class="block-body">
          <p>John Brown
            <br> 13/25 New Avenue
            <br> New Heaven
            <br> 45Y 73J
            <br> England
            <br> Great Britain</p>
        </div>
      </div>
    </div>
    <!-- /.addresses                           -->
  </div>
</template>

<script>
export default {
  name: 'Order-Details'
}
</script>

<style>

</style>
