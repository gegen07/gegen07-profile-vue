<template>
  <v-toolbar color="primary" fixed app>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <router-link to="/"><v-toolbar-title class="grey--text text--lighten-3">Germano Barcelos</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="fill-height">
      <v-btn to="/about" class="grey--text text--lighten-3" flat>Sobre</v-btn>
      <v-btn to="/exp" class="grey--text text--lighten-3" flat>Experiências</v-btn>
      <v-btn to="/skills" class="grey--text text--lighten-3" flat>Habilidades</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
