<template>
  <section class="hero hero-home no-padding">
    <!-- Hero Slider-->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" style=" width:100%; height: 450px !important;">
        <div class="carousel-item active">
          <div style="background: url(../../../static/Assets/img/hero-bg.jpg);" class="item d-flex align-items-center has-pattern">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <h1>Hub</h1>
                  <ul class="lead">
                    <li>
                      <strong>Bootstrap 4 E-commerce</strong> template</li>
                    <li>
                      <strong>24</strong> pages,
                      <strong>6</strong> colour variants</li>
                    <li>
                      <strong>SCSS</strong> sources </li>
                    <li>frequent &
                      <strong>free updates</strong>
                    </li>
                  </ul>
                  <router-link :to="'/products'" class="btn btn-template wide shop-now">Shop Now
                    <i class="icon-bag"> </i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div style="background: url(../../../static/Assets/img/hero-bg-2.jpg);" class="item d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 text-white">
                  <h1>Labore et dolore magna aliqua</h1>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
                  <router-link :to="'/products'" class="btn btn-template wide shop-now">Shop Now
                    <i class="icon-bag"> </i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div style="background: url(../../../static/Assets/img/hero-bg-3.jpg);" class="item d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 text-white">
                  <h1>Sed do eiusmod tempor</h1>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
                  <router-link :to="'/products'" class="btn btn-template wide shop-now">Shop Now
                    <i class="icon-bag"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero-section'
}
</script>

<style>
.carousel-control-next, .carousel-control-prev {
  width: 30px !important;
  height: 30px !important;
  border-radius: 50%;
  background: #fff;
  color: #555 !important;
  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  background: #fff !important;
  top: 50% !important;
  opacity: 1 !important;
}
.carousel-control-next {
  right: 20px
}
.carousel-control-prev {
  left: 20px
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  top: -5px;
  position: relative;
}

.carousel-control-next-icon:after {
  content: '>';
  font-size: 20px;
  color: gray;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 20px;
  color: gray;
}
</style>
