<template>
  <v-app>
    <Navbar/>
      <router-view/>
    <Footer/>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
