<template>
  <AppHeader/>
  <app-about></app-about>
  <app-services></app-services>
  <app-faq></app-faq>
  <app-contact></app-contact>
</template>

<script>
import AppAbout from './components/AppAbout.vue'
import AppFaq from './components/AppFaq.vue'
import AppHeader from './components/AppHeader.vue'
import AppServices from './components/AppServices.vue'
import AppContact from './components/AppContact.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAbout,
    AppServices,
    AppFaq,
    AppContact
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
