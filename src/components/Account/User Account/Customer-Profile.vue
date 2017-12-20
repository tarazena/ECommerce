<template>
  <div class="col-lg-8 col-xl-9 pl-lg-3">
    <div class="block-header mb-5">
      <h5>Change password </h5>
    </div>
    <form class="content-block">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="password_old" class="form-label">Old password</label>
            <input id="password_old" type="password" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="password_1" class="form-label">New password</label>
            <input id="password_1" type="password" class="form-control">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="password_2" class="form-label">Retype new password</label>
            <input id="password_2" type="password" class="form-control">
          </div>
        </div>
      </div>
      <!-- /.row-->
      <div class="text-center">
        <button type="submit" class="btn btn-primary">
          <i class="fa fa-save"></i>Change password</button>
      </div>
    </form>
    <div class="block-header mb-5">
      <h5>Personal details</h5>
    </div>
    <form class="content-block">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="firstname" class="form-label">Firstname</label>
            <input id="firstname" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="lastname" class="form-label">Lastname</label>
            <input id="lastname" type="text" class="form-control">
          </div>
        </div>
      </div>
      <!-- /.row-->
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="company" class="form-label">Company</label>
            <input id="company" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="street" class="form-label">Street</label>
            <input id="street" type="text" class="form-control">
          </div>
        </div>
      </div>
      <!-- /.row-->
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <div class="form-group">
            <label for="city" class="form-label">Company</label>
            <input id="city" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="form-group">
            <label for="zip" class="form-label">ZIP</label>
            <input id="zip" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="form-group">
            <label for="state" class="form-label">State</label>
            <select id="state" class="form-control"></select>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="form-group">
            <label for="country" class="form-label">Country</label>
            <select id="country" class="form-control"></select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="phone" class="form-label">Telephone</label>
            <input id="phone" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="text" class="form-control">
          </div>
        </div>
        <div class="col-sm-12 text-center">
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i>Save changes</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Customer-Profile'
}
</script>

<style>

</style>
