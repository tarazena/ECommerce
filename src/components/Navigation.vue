<template>
<nav class="navbar navbar-expand-md navbar-fixed-top" style="background-color: yellow">
    <div class="container-fluid">
          <div class="navbar-header">
            <button type="button"  class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style="border-color:#337ab7;" id="navMenu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
              <span class="icon-bar" style="background-color: #337ab7;"></span>
            </button>
            <a class="navbar-brand" href="#" id="navBar">MyEcommerce</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item active">
            <router-link  class="nav-link" :to="`/`" @click="toggleMenu()" style="padding: 15px">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/protifolio`" style="padding: 15px">Protifolio</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="" style="padding: 15px">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="" style="padding: 15px">Cart</a>
          </li>
          <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style="border-color:#337ab7;"> -->
            </ul>
            <!-- <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul> -->
            
          </div><!--/.nav-collapse -->
          
        </div>
</nav>
</template>
<script>
export default {
  name: 'navbar',
  methods: {
    toggleMenu () {
      $('#navMenu').collapse('hide')
    }
  }
}
</script>
