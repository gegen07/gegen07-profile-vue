<template>
  <v-content>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <Home id="landing"/>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>

<style>

</style>
