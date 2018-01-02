<template>
  <div>
    <div v-html="msg"></div>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  data () {
    return {
      msg: '<h1>Hello World</h1>'
    }
  }
}
</script>

<style>

</style>
