<template>
  <section class="hero hero-home no-padding">
      <!-- Hero Slider-->
      <div class="owl-carousel owl-theme hero-slider" id="owlCarousel">
        <div style="background: url(../../../static/Assets/img/hero-bg.jpg);" class="item d-flex align-items-center has-pattern">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h1>Hub</h1>
                <ul class="lead"> 
                  <li><strong>Bootstrap 4 E-commerce</strong> template</li>
                  <li><strong>24</strong> pages, <strong>6</strong> colour variants</li>
                  <li><strong>SCSS</strong> sources </li>
                  <li>frequent & <strong>free updates</strong></li>
                </ul><a href="#" class="btn btn-template wide shop-now">Shop Now<i class="icon-bag"> </i></a>
              </div>
            </div>
          </div>
        </div>
        <div style="background: url(../../../static/Assets/img/hero-bg-2.jpg);" class="item d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 text-white">
                <h1>Labore et dolore magna aliqua</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-template wide shop-now">Shop Now<i class="icon-bag">  </i></a>
              </div>
            </div>
          </div>
        </div>
        <div style="background: url(../../../static/Assets/img/hero-bg-3.jpg);" class="item d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 text-white">
                <h1>Sed do eiusmod tempor</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-template wide shop-now">Shop Now<i class="icon-bag">           </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'hero-section',
  created () {
    $(document).ready(function () {
      var owl = $('#owlCarousel')
      owl.owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true
          },
          600: {
            items: 1,
            nav: false,
            dots: true
          },
          1120: {
            items: 1,
            dots: false,
            nav: true
          }
        },
        onRefresh: function () {
          owl.find('.item').height('')
        },
        onRefreshed: function () {
          var maxHeight = 0
          var items = owl.find('.item')
          items.each(function () {
            var itemHeight = $(this).height()
            if (itemHeight > maxHeight) {
              maxHeight = itemHeight
            }
          })
          items.height(maxHeight)
        }
      })
    })
  }
}
</script>

<style>

</style>
