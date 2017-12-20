<template>
  <div>
    <ContactHero />
    <main class="contact-page">
      <ContactDetails />
      <ContactMap />
      <ContactForm />
    </main>
  </div>
</template>

<script>
import ContactHero from './ContactHero'
import ContactDetails from './Contact-Details'
import ContactMap from './Contact-Map'
import ContactForm from './Contact-Form'

export default {
  name: 'contact-us',
  components: {
    ContactHero,
    ContactDetails,
    ContactMap,
    ContactForm
  }
}
</script>

<style>

</style>
