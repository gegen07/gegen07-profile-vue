<template>
  <v-content>
    <Home id="landing"/>
    <Education id="education"/>
    <Extra id="extra-education"/>
  </v-content>
</template>

<script>
import Home from '@/components/Home.vue'
import Education from '@/components/Education.vue'
import Extra from '@/components/Extra.vue'
export default {
  name: 'home',
  components: {
    Home,
    Education,
    Extra
  }
}
</script>

<style>

</style>
