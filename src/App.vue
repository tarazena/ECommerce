<template>
  <div id="app">
    <navbar />
    <router-view/>
    <site-footer />
  </div>
</template>

<script>
import Navigation from './components/Main Components/Navigation'
import Footer from './components/Main Components/Footer'

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
