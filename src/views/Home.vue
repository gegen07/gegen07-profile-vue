<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <Home id="landing"/>
          <Education id="education"/>
          <Extra id="extra-education"/>
          <languages id="languages" />
          <Experience id="experience"/>
          <Skills id="skills"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Home from '@/components/Home.vue'
import Education from '@/components/Education.vue'
import Extra from '@/components/Extra.vue'
import Languages from '@/components/Languages.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
export default {
  name: 'home',
  components: {
    Home,
    Education,
    Extra,
    Languages,
    Experience,
    Skills
  }
}
</script>

<style>

</style>
