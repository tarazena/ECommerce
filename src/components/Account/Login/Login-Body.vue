<template>
  <section class="padding-small">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="block">
              <div class="block-header">
                <h5>Login</h5>
              </div>
              <div class="block-body"> 
                <p class="lead">Already our customer?</p>
                <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <hr>
                <form method="post" v-on:submit.prevent>
                  <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="text" class="form-control" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" class="form-control" v-model="password">
                  </div>
                  <div class="form-group">
                    <label for="password" class="form-label red" v-if="error">Invalid User ID or Password</label>
                  </div>
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary" @click.prevent="Login()"><i class="fa fa-sign-in"></i>Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="block">
              <div class="block-header">
                <h5>New account</h5>
              </div>
              <div class="block-body"> 
                <p class="lead">Not our registered customer yet?</p>
                <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                <hr>
                <form action="customer-orders.html" method="post">
                  <div class="form-group">
                    <label for="newName" class="form-label">Name</label>
                    <input id="newName" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="newEmail" class="form-label">Email</label>
                    <input id="newEmail" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="newPassword" class="form-label">Password</label>
                    <input id="newPassword" type="password" class="form-control">
                  </div>
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary"><i class="icon-profile"></i>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import router from '../../../router/index'

export default {
  name: 'Login-Body',
  methods: {
    Login () {
      var model = this
      $.ajax({
        type: 'POST',
        url: 'http://api-ecommerce.azurewebsites.net/v1/login',
        data: {userID: model.email, password: model.password},
        success: function (resp, textStatus, request) {
          if (request.status === 202) {
            model.$store.dispatch('setToken', resp.token)
            router.push('/account/orders')
          } else {
            console.log('Error in response!')
          }
        },
        error: function () {
          model.error = true
        }
      })
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  watch: {
    email: function () {
      this.error = false
    },
    password: function () {
      this.error = false
    }
  }
}
</script>

<style>
.red{
  color: red !important;
}
</style>
