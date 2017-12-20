<template>
  <section>
        <div class="container">
          <header class="mb-5">
            <h2 class="heading-line">Contact form</h2>
          </header>
          <div class="row">
            <div class="col-md-7">
              <form id="contact-form" class="custom-form form">
                <div class="controls">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="name" class="form-label">Your firstname *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your firstname" required="required" class="form-control" v-model="firstName">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="surname" class="form-label">Your lastname *</label>
                        <input type="text" name="surname" id="surname" placeholder="Enter your lastname" required="required" class="form-control" v-model="lastName">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="message" class="form-label">Your message for us *</label>
                    <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" class="form-control" v-model="message"></textarea>
                  </div>
                  <button type="submit" class="btn btn-template" @click.prevent="submitForm()">Send message</button>
                </div>
              </form>
            </div>
            <div class="col-md-5">
              <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
              <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
              <div class="social">
                <ul class="list-inline">
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-behance"></i></a></li>
                  <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'Contact-Form',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm: function () {
      var model = this
      $.ajax({
        type: 'POST',
        url: 'http://localhost/EcommerceAPIs/v1/contact',
        data: {firstName: model.firstName, lastName: model.lastName, email: model.email, message: model.message},
        success: function (resp, textStatus, request) {
          console.log(request)
          if (request.status === 200) {
            model.firstName = ''
            model.lastName = ''
            model.email = ''
            model.message = ''
          }
        },
        error: function () {
          console.log('error in contact')
        }
      })
    }
  }
}
</script>

<style>

</style>
