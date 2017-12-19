<template>
<div>
  <heroSection></heroSection>
</div>
</template>

<script>
import Hero from './Home/Hero.vue'
import Categories from './Home/Categories.vue'
import MensCollection from './Home/MensCollection.vue'

export default {
  name: 'HomePage',
  components: {
    heroSection: Hero,
    categoriesSection: Categories,
    mensCollection: MensCollection
  }
}
</script>

<style>
</style>
