<template>
  <v-toolbar color="primary" fixed app>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <router-link to="/">
      <v-toolbar-title @click="$vuetify.goTo('#landing', { offset: -100 })" class="grey--text text--lighten-3">Germano Barcelos</v-toolbar-title>
      </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="fill-height">
      <v-menu bottom>
        <v-btn
          slot="activator"
          color="primary"
          dark
          flat
          class="grey--text text--lighten-3"
        >
          Educação
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click="$vuetify.goTo(item.id, { offset: -100 })"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn class="grey--text text--lighten-3" flat>Experiências</v-btn>
      <v-btn class="grey--text text--lighten-3" flat>Habilidades</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'navbar',
  data: () => ({
    items: [
      { title: 'Formação Acadêmica', id: '#education' },
      { title: 'Formação Extra', id: '#extra-education' }
    ]
  })
}
</script>

<style>

</style>
