<template>
  <div>
    <LoginHero />
    <LoginBody />
  </div>
</template>

<script>
import LoginHero from './Login-Hero'
import LoginBody from './Login-Body'

export default {
  name: 'Login-Page',
  components: {
    LoginHero, LoginBody
  }
}
</script>

<style>

</style>
