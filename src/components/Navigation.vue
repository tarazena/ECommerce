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
              <li v-for="(route, index) in routes" :key="index" class="nav-item" @click="toggleMenu()">
            <router-link  class="nav-link" :to="route.route" style="padding: 15px">{{route.name}}</router-link>
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
      $('#navbar').collapse('hide')
    }
  },
  data () {
    return {
      routes: [
        {
          route: '/',
          name: 'Home'
        },
        {
          route: 'protifolio',
          name: 'Protifolio'
        },
        {
          route: '/',
          name: 'Contact'
        },
        {
          route: '/',
          name: 'Cart'
        }
      ]
    }
  }
}
</script>
