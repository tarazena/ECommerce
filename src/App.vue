<template>
  <div id="app">
    <navbar />
    <router-view :key="$route.fullPath"/>
    <site-footer />
  </div>
</template>

<script>
import Navigation from './components/Main Components/Navigation'
import Footer from './components/Main Components/FooterComponent'

export default {
  name: 'app',
  data () {
    return {
      hoverOver: false
    }
  },
  components: {
    'navbar': Navigation,
    'site-footer': Footer
  }
}
</script>

<style>
</style>
