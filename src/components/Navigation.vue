<template>
<nav class="navbar navbar-expand-md navbar-fixed-top" style="background-color: yellow">
    <div class="container">
        
  <a class="navbar-brand" href="#" id="navBar">MyEcommerce
  </a>
  <ul class="nav navbar-nav navbar-right">
   <li class="nav-item active">
      <a class="nav-link" routerLink="home" style="padding: 15px">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="protifolio" style="padding: 15px">Protifolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="contactus" style="padding: 15px">Contact</a>
    </li>
  </ul>
    </div>
</nav>
</template>
<<script>
export default {
  name: 'navbar'
}
</script>
