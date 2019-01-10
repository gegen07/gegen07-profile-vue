<template>
  <v-content>
    <v-container>
      <p class="display-2" color="brown">Formação Acadêmica</p>
      <v-timeline>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">2019 - 2023</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">Ciência da Computação - PUC Minas</v-card-title>
              <!-- <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-card-text> -->
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">2016-2018</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">Técnico em Análise e Desenvolvimento de Sistemas - COLTEC/UFMG</v-card-title>
              <!-- <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </v-card-text> -->
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'education'
}
</script>

<style>

</style>
