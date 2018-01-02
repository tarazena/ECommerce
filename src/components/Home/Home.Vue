<template>
<div>
  <heroSection></heroSection>
  <categoriesSection />
  <mensCollection />
</div>
</template>

<script>
import Hero from './Hero.vue'
import Categories from './Categories.vue'
import MensCollection from './MensCollection.vue'

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
