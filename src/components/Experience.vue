<template>
  <v-content>
    <v-container>
      <p class="display-2" color="brown">Experiência Profissional</p>
      <v-timeline>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">6 meses - 2018</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">Progetec - Estágio</v-card-title>
              <v-card-text class="text-xs-justify">
                Trabalhei com C# para transformar o sistema Desktop para sistema web. Para isso tive que arquiteturar o sistema com o DDD. Também desenvolvi os códigos do SQLServer utilizando a ferramenta de migrations a partir dos domínios definidos.
              </v-card-text>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'experience'
}
</script>

<style>

</style>
