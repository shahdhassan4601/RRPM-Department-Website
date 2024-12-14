<template>
  <div id="app">
    <!-- Header -->
    <Header />
    
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


